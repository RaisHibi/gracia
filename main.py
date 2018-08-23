from flask import Flask, render_template, redirect, url_for
from website import picture_row, assign_title

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('main.html')

@app.route('/mebel/<page_num>')
def mebel(page_num):
    pic_code = picture_row('mebel', page_num)
    return render_template('mebel.html', pic_code=pic_code)

@app.route('/mebel/<section_1>/<section_2>/<section_3>/<page_num>/')
@app.route('/mebel/<section_1>/<section_2>/<page_num>/', defaults={'section_3': ''})
@app.route('/mebel/<section_1>/<section_2>/<section_3>/', defaults={'page_num':'1'})
@app.route('/mebel/<section_1>/<section_2>/', defaults={'page_num':'1', 'section_3': ''})
def mebel_main(section_1, section_2, section_3, page_num):
    section=section_1 + ' ' + section_2 + ' ' + section_3
    if section_3 == "":
	way = section_1 + ' ' + section_2
    else:
	way = section_1 + ' ' + section_2 + ' ' + section_3
    title = assign_title(way)
    pic_code = picture_row('mebel', page_num, section, n=3)
    return render_template('mebel.html', pic_code=pic_code, title=title)

@app.route('/okna')
def okna():
    return render_template('okna.html')

@app.route('/potolki/', defaults={'page_num':'1'})
@app.route('/potolki/<page_num>')
def potolki(page_num):
    pic_code = picture_row('potolki', page_num, section=None, n=1)
    return render_template('potolki.html', pic_code=pic_code)

@app.route('/production', defaults={'page_num':'1'})
def production(page_num):
    pic_code = picture_row('production', page_num, section=None, n=1)
    return render_template('production.html', pic_code=pic_code)

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
