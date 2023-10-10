from flask import Flask,request,jsonify
from flask_cors import CORS
import pandas as pd
import subprocess
import os

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['POST'])
def hello():
    video = request.files['video']  
    save_directory = 'Video/'
    os.makedirs(save_directory, exist_ok=True)  
    file_path = os.path.join(save_directory, video.filename)
    video.save(file_path)
    print(file_path)
    return 'video uploded'



def get_first_filename(directory):
    filenames = os.listdir(directory)
    if filenames:
        first_filename = filenames[0]
        first_name = os.path.splitext(first_filename)[0]
        file_name= first_name.split('_')
        first_name = '_'.join(file_name[:2])
        return first_name
def offlineprocess():
    contacts_positions11=pd.read_csv('data-train')
    game_play=get_first_filename('Video')
    print(game_play)
    result=contacts_positions11[(contacts_positions11['game_play']==game_play) ]
    result = contacts_positions11[(contacts_positions11['game_play']==game_play) ]
    columns_to_keep = ['game_play','frame','jersey_number_1','jersey_number_2','x_position_1','x_position_y','y_position_1','y_position_y','speed_1','speed_2','direction_1','directioon_2','contact']
    result = result[columns_to_keep]
    result = result.dropna()
    resultfinal= result.to_dict(orient='records')
    print(result)
    return resultfinal

def onlineprocess():
    video_path = 'C:/Users/LENOVO X13/Documents/PFA-Project/tmp_contact_58168_003392_Endzone.mp4' # Replace with the actual path to your video file on disk
    
    try:
        os.startfile(video_path)
        return 'video displayed'
    except Exception as e:
        return str(e)



@app.route('/process',methods=['POST'])
def process():
    button_value = request.json.get('buttonValue')
    print(button_value)
    if button_value=='Offline':
        return jsonify(offlineprocess())
    else:   
        return onlineprocess()

if __name__ == '__main__':
    app.run()