def picture_row(page_name):
    pic_code = ''
    pic_is = True
    n = 0
    while pic_is == True:
        n += 1
        pic_code = pic_code + ' ' + ''.join(
            '<div class="col-md-4 col-xs-4 col-sm-4"><img src="static/images/'+str(page_name)+'/' + str(
                n) + '.JPG" class="img-thumbnail"></div>')
        try:
            open('static/images/'+str(page_name)+'/' + str(n + 1) + '.JPG')
        except:
            pic_is = False
    return(pic_code)