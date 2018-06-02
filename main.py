from flask import Flask, render_template, redirect
from website import picture_row
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('main.html')

@app.route('/mebel/<page_num>')
def mebel(page_num):
    pic_code = picture_row('mebel', page_num)
    return render_template('mebel.html', pic_code=pic_code)

@app.route('/mebel')
def mebel_main():
    return redirect('/mebel/1')

@app.route('/okna')
def okna():
    return render_template('okna.html')

@app.route('/potolki/<page_num>')
def potolki(page_num):
    pic_code = picture_row('potolki', page_num)
    return render_template('potolki.html', pic_code=pic_code)

@app.route('/potolki')
def potolki_main():
    return redirect('/potolki/1')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
