def picture_row(page_name, page_num):
    pic_code = dict()
    pic_is = True
    image_counter = 0
    page_image_counter = 0
    page_counter = 1
    pic_code['1'] = '<div class="row">'
    while pic_is == True:
        image_counter += 1
        page_image_counter += 1
        if page_image_counter == 10:
            page_counter += 1
            page_image_counter = 1
            pic_code[str(page_counter)] = '<div class="row">'
        pic_code[str(page_counter)] = pic_code[str(page_counter)] + ' ' + '<a href="/static/images/'+str(page_name)+'/' + str(image_counter) + '.jpg" data-fancybox="images" class="col-md-4 col-xs-4 col-sm-4"><img src="/static/images/'+str(page_name)+'/' + str(image_counter) + '.jpg" class="img-thumbnail"></a>'

        try:
            open('static/images/'+str(page_name)+'/' + str(image_counter + 1) + '.jpg')
        except:
            pic_is = False
    pic_code['num'] = '<div class="btn-group col-xs-12">'
    for k in range(page_counter):
        if k == int(page_num) - 1:
            pic_code['num'] = pic_code['num'] + '<a href="/'+page_name+'/'+str(k+1)+'" class="btn active">'+str(k+1)+'</a>'
        else:
            pic_code['num'] = pic_code['num'] + '<a href="/'+page_name+'/'+str(k+1)+'" class="btn">'+str(k+1)+'</a>'
        if k == page_counter - 1:
            pic_code['num'] = pic_code['num'] + '</div></div>'
    pic_code = pic_code[page_num] + pic_code['num']
    return(pic_code)
