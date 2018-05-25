from flask import Flask, render_template, redirect
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
    return render_template('potolki.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')

@app.route('/contacts/')
def contacts_redirect():
    return redirect('/contacts')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
