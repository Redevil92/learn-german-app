from flask_sqlalchemy import SQLAlchemy
from models import VerbModel
from models import DictionaryItemModel


def upload_verbs_database(db:SQLAlchemy):
    print("@@@ STARTING @@@@")
    
    db.create_all()
    file_path = '/Users/stefanobadalucco/Coding/Web/learn-german-app/Backend/static/verbs.csv'
    database_file = open(file_path, 'r', encoding='utf-8')
    count = 0
    line = database_file.readline()

    while True:
        count += 1
    
        # Get next line from file
        line = database_file.readline()

        if line == '**END**':
            break
    
        line_splitted = line.split(',')
        print("verb", line)

        record = VerbModel( 
            infinitive = line_splitted[0],
            praesens_ich = line_splitted[1],
            praesens_du = line_splitted[2],
            praesens_er = line_splitted[3],
            praeteritum_ich = line_splitted[4],
            partizip_II = line_splitted[5],
            konjunktiv_II_ich = line_splitted[6],
            imperativ_singular  = line_splitted[7],
            imperativ_plural = line_splitted[8],
            hilfsverb  = line_splitted[9])
        db.session.add(record)



        if count % 1000 == 0:
            print("Count", count)
    
    print("Data Saved Successfully, commiting to the database")
    db.session.commit()
    database_file.close()

   

def upload_words_database(db:SQLAlchemy, file_path:str):
    db.create_all()
    #file_path = '/Users/stefanobadalucco/Downloads/end/static/de-en.txt'
    database_file = open(file_path, 'r', encoding='utf-8')
    count = 0

    while True:
        count += 1
    
        # Get next line from file
        line = database_file.readline()
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
        
        
        record = DictionaryItemModel(word=word, word_in_detail=word_in_detail, translation=translation)
        db.session.add(record)

        if count % 3000 == 0:
            print("Count", count)
    
    print("Data Saved Successfully, commiting to the database")
    db.session.commit()
    database_file.close()

   