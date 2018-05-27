from flask import Flask, render_template
from website import picture_row
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('main.html')

@app.route('/mebel')
def mebel():
    return render_template('mebel.html')

@app.route('/okna')
def okna():
    return render_template('okna.html')

@app.route('/potolki')
def potolki():
    pic_code = picture_row('potolki')
    return render_template('potolki.html', pic_code=pic_code)

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
