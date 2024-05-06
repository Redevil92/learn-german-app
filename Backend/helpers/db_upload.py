
def upload_databse(db, file_path):
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

   