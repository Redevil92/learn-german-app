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
        parseText(file_path)
        return redirect(url_for('index'))
    return redirect(url_for('index'))


def parseText(filePath):
    # Using readline()
    file1 = open(filePath, 'r', encoding='utf-8')
    count = 0
    db = get_db()
    
    while True:
        count += 1
    
        # Get next line from file
        line = file1.readline()
        word = ''
        word_in_detail = ''
        translation = ''


       # delimiter_index = min(line.find("{"), line.find(";"), line.find("|")) 
        indexes = [line.find("{"), line.find(";"), line.find("|")]
        delimiter_index = -1
        for index in indexes:
            if index != -1:
                if delimiter_index == -1:
                    delimiter_index = index
                else:
                    delimiter_index = min(delimiter_index, index)
                
        
        
        if delimiter_index != -1 or delimiter_index != 0: 
            word = line[:delimiter_index]  
        else:
            word = line[:line.find("::")]

        delimiter_index = line.find("::")
        if delimiter_index != -1:
            word_in_detail = line[:delimiter_index]
            translation = line[delimiter_index+2:]

        if not line:
            break
        
        db.execute(
            "INSERT INTO german_english_dictionary (word,word_in_detail, translation) VALUES (?, ?, ?)",
            (word.strip(), word_in_detail.strip(), translation.strip()) 
        )

        if count % 3000 == 0:
            print("Count", count)
    
    print("Data Saved Successfully, commiting to the database")
    db.commit()
    file1.close()

def parseCSV(filePath):
    # CVS Column Names
    col_names = ['definition','translation','definition_type', 'extra_info']
    # Use Pandas to parse the CSV file
    csvData = pd.read_csv(filePath,names=col_names, header=None)
    db = get_db()
    # Loop through the Rows
    for i,row in csvData.iterrows():
        
        db.execute(
            "INSERT INTO german_english_dictionary (definition,translation,definition_type, extra_info) VALUES (?, ?, ?, ?)",
            (row['definition'],row['translation'],row['definition_type'],row['extra_info']) 
        )
        #db.execute(sql, value, if_exists='append')
        
        if i%1000 == 0:
            print(i, " rows inserted")
    db.commit()
    print("Data Saved Successfully")