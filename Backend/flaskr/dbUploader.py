from flask import ( Blueprint, flash, g, redirect, render_template, request, url_for, current_app)


import os
from werkzeug.exceptions import abort
import pandas as pd
from flaskr.db import get_db


bp = Blueprint('dbUploader', __name__)


# Root URL
@bp.route('/dbUploader')
def index():
    # Set The upload HTML template '\templates\index.html'
    return render_template('dbUploader/index.html')



# Get the uploaded files
@bp.route("/dbUploader", methods=['POST'])
def uploadFiles():
    if 'file' not in request.files:
        flash('No file part')
        return redirect(request.url)
    file = request.files['file']

    if file.filename == '':
        flash('No file selected for uploading')
        return redirect(request.url)
    if file:
        filename = file.filename
        file_path = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        parseCSV(file_path)
        return redirect(url_for('index'))
    return redirect(url_for('index'))


def parseCSV(filePath):
    # CVS Column Names
    col_names = ['definition','translation','definition_type', 'extra_info']
    # Use Pandas to parse the CSV file
    csvData = pd.read_csv(filePath,names=col_names, header=None)
    db = get_db()
    # Loop through the Rows
    for i,row in csvData.iterrows():
    
        sql = "INSERT INTO german_english_dictionary (definition,translation,definition_type, extra_info) VALUES (%s, %s, %s, %s)"
        value = (row['definition'],row['translation'],row['definition_type'],row['extra_info'])
        
        db.execute(
            "INSERT INTO german_english_dictionary (definition,translation,definition_type, extra_info) VALUES (?, ?, ?, ?)",
            (row['definition'],row['translation'],row['definition_type'],row['extra_info']) 
        )
        #db.execute(sql, value, if_exists='append')
        
        if i%1000 == 0:
            print(i, " rows inserted")
    db.commit()
    print("Data Saved Successfully")