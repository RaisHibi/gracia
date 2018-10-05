# coding=utf-8
import urllib
def picture_row(page_name, page_num, section, n):
    way = str(page_name) + '/'
    if section != None:
      section = [i for i in section.split()]
      for k in range(n):
  	 try:     
	      section_name = eval('section[k]')
	      section_name += '/'
              way += section_name
         except:
              pass
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
        pic_code[str(page_counter)] = pic_code[str(page_counter)] + ' ' + '<a href="' + '//s3.us-east-2.amazonaws.com/gracia-novo/static/images/' + way + str(image_counter) + '.jpg" data-fancybox="images" class="col-sm-4"><img src="//s3.us-east-2.amazonaws.com/gracia-novo/static/images/'+ way + str(image_counter) + '.jpg" class="img-thumbnail"></a>'

        try:
            open('static/images/' + way + str(image_counter + 1) + '.jpg')
        except:
            pic_is = False
    if page_counter > 1:
	    pic_code['num'] = '<div class="btn-group col-xs-12">'
	    for k in range(page_counter):
		if k == int(page_num) - 1:
		    pic_code['num'] = pic_code['num'] + '<a href="/' + way +str(k+1)+'" class="btn active">'+str(k+1)+'</a>'
		else:
		    pic_code['num'] = pic_code['num'] + '<a href="/' + way +str(k+1)+'" class="btn">'+str(k+1)+'</a>'
		if k == page_counter - 1:
		    pic_code['num'] = pic_code['num'] + '</div></div>'
	    pic_code = pic_code[page_num] + pic_code['num']
    else:
	    pic_code = pic_code[page_num]
    return(pic_code)

def assign_title(way):
	import pandas as pd
	title_base = pd.read_pickle('title-base.pkl')
	title_index = title_base[title_base['way'].str.startswith(way)].index[0]
	title = title_base.title[title_index].decode('utf-8')
	return title
