import json

class Json2Dic():
    def json2dic(json_data):
        data = json.loads(json_data)
        return data

    def dic2html(dic_data):
        url0 = dic_data[0].article_url
        image_url0 = dic_data[0].image_url
        title0 = dic_data[0].title
        url1 = dic_data[1].article_url
        image_url1 = dic_data[1].image_url
        title1 = dic_data[1].title
        url2 = dic_data[2].article_url
        image_url2 = dic_data[2].image_url
        title2 = dic_data[2].title
        template_html ='''
        <div class="_taxel_recommend_articles _taxel_recommend_container" gmo_css="cls_rwsample_1" data-animate="">
    <div class="_taxel_recommend_header">
        <h2>あなたにオススメ</h2>
    </div>
    <ul class="taxel_ul_wrap">
        <li>
            <ul class="_taxel_row _taxel_column_1 _taxel_image_left">
                <li style='display:none' '_taxel_recommend_article_show'>
                    <div class='_taxel_recommend_article'>
                        <a href='{media_url_0}' onclick='' onmousedown='this.href="{onmousedown_url_0}' target='_top'>
                            <!--<div class='_taxel_recommend_art_img' data-layzr-normal='{image_url_0}' data-layzr-bg></div>-->
                            <img class='_taxel_recommend_art_img' src='{image_url_0}' />
                            <div class='_taxel_recommend_content'>
                                <div class='_taxel_recommend_art_title'>{title_0}</div>
                            </div>
                            <div style='clear:both'></div>
                        </a>
                    </div>
                </li>
            </ul>
        </li>
        <li>
            <ul class="_taxel_row _taxel_column_1 _taxel_image_left">
                <li style='display:none' '_taxel_recommend_article_show'>
                    <div class='_taxel_recommend_article'>
                        <a href='{media_url_1}' onclick='' onmousedown='this.href="{onmousedown_url_1}' target='_top'>
                            <img class='_taxel_recommend_art_img' src='{image_url_1}' />
                            <div class='_taxel_recommend_content'>
                                <div class='_taxel_recommend_art_title'>{title_1}</div>
                            </div>
                            <div style='clear:both'></div>
                        </a>
                    </div>
                </li>
            </ul>
        </li>
        <li>
            <ul class="_taxel_row _taxel_column_1 _taxel_image_left">
                <li style='display:none' '_taxel_recommend_article_show'>
                    <div class='_taxel_recommend_article'>
                        <a href='{media_url_2}' onclick='' onmousedown='this.href="{onmousedown_url_2}' target='_top'>
                            <img class='_taxel_recommend_art_img' src='{image_url_2}' />
                            <div class='_taxel_recommend_content'>
                                <div class='_taxel_recommend_art_title'>{title_2}</div>
                            </div>
                            <div style='clear:both'></div>
                        </a>
                    </div>
                </li>
            </ul>
        </li>
    </ul>
    <div class="_taxel_recommend_credit" onclick="GMOADRW.policy()">
        Recommended by GMO
    </div>
    </div>
    </div>'''.format(media_url_0=url0, onmousedown_url_0=url0, image_url_0=image_url0, title_0=title0, media_url_1=url1, onmousedown_url_1=url1, image_url_1=image_url1, title_1=title1,media_url_2=url2, onmousedown_url_2=url2, image_url_2=image_url2, title_2=title2)
        return template_html


    
    def append_css():
        css = '''<style type='text/css'>
        /* @media screen and (max-width: ●px) {
        #gmo_rw_##### {
            display: block;
            display: none;
        }
        }
        @media screen and (min-width: ■px) {
        #gmo_rw_##### {
            display: none;
            display: block;
        }
        } */
        body._taxel_body {
        margin: 0 !important;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] * {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        text-decoration: none;
        font-family: 'Avenir Next', 'Noto Sans Japanese', sans-serif;
        margin: 0;
        padding: 0;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] {
        margin: auto;
        background: #fff;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul.taxel_ul_wrap {
        padding: 0;
        margin: 0;
        display: block;
        white-space: normal;
        overflow: hidden;
        clear: both;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_recommend_header {}
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] h2 {
        /* display: block;
        text-align: left;
        background-color: #ff8d95;
        padding: 5px 8px;
        font-size: 20px;
        line-height: 1.1;
        font-weight: normal;
        color: #fff; */
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] h2:before {
        content: '';
        border: none;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] h2:after {
        content: '';
        border: none;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1']>ul>li {
        font: inherit;
        vertical-align: baseline;
        display: block;
        word-break: break-all;
        list-style: none;
        width: 100%;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul.taxel_ul_wrap>li {
        font: inherit;
        vertical-align: baseline;
        display: block;
        word-break: break-all;
        list-style: none;
        width: 100%;
        padding: 0;
        margin: 0;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_recommend_article {
        /* font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        display: block;
        word-break: break-all;
        height: 100%; */
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_recommend_article_show {
        /* box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        overflow: hidden;
        vertical-align: top;
        display: block;
        float: none;
        width: 90%;
        border: none;
        margin: 0px auto;
        overflow: hidden; */
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_row {
        /* clear: both;
        display: block;
        width: 100%;
        margin: 0;
        padding: 0; */
        }
        [data-animate] ._taxel_row {
        overflow: hidden;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_row li {
        display: block !important;
        list-style: none;
        /*float: left;*/
        position: relative !important;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_row li a {
        display: block;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_recommend_content {
        float: none;
        padding: 0;
        margin: 0;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_recommend_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_art_img_2 {
        background-color: #fff;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover !important;
        overflow: hidden;
        border-radius: 6px;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_recommend_art_title, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_art_title {
        display: block;
        text-align: left;
        color: #645c57;
        font-size: 1.4rem;
        line-height: 1.4;
        font-weight: normal;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        display: -webkit-box !important;
        -webkit-box-orient: vertical !important;
        -webkit-line-clamp: 2;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_ad_art_org_sponsor, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_sponsored, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_ad_art_sponsor, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_recommend_art_date, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_recommend_art_optional {
        display: inline-block;
        color: #999;
        font-size: 10px;
        line-height: 12px;
        font-weight: normal;
        position: absolute;
        bottom: 5px;
        right: 5px;
        text-align: left;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_ad_art_org_sponsor, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_sponsored, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_ad_art_sponsor, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_recommend_art_date, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_recommend_art_optional {
        display: inline-block;
        color: #999;
        font-size: 10px;
        line-height: 12px;
        font-weight: normal;
        position: absolute;
        bottom: 5px;
        right: 5px;
        text-align: left;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_recommend_art_description, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_ad_art_org_sponsor, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_sponsored, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_ad_art_sponsor, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_recommend_art_date, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_recommend_art_optional {
        display: inline-block;
        color: #9f9f9d;
        font-size: 1rem;
        line-height: 1.3;
        font-weight: normal;
        position: absolute;
        bottom: 3%;
        left: 3%;
        text-align: left;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_1 li ._taxel_ad_art_org_sponsor, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_1 li ._taxel_sponsored, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_1 li ._taxel_ad_art_sponsor, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_1 li ._taxel_recommend_art_date, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_1 li ._taxel_recommend_art_optional, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_1 li ._taxel_recommend_art_description {
        color: #9f9f9d;
        font-size: 1rem;
        line-height: 1.3;
        font-weight: normal;
        text-align: left;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_recommend_article_show {
        display: block !important;
        }
        /* ======================================================== */
        /* ----------- カラム1 ------------ */
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_1 li {
        width: 100%;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_1 li a {
        display: inline-flex;
        width: 100%;
        }
        /* ======================================================== */
        /* ----------- カラム1　左画像右タイトル ------------ */
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_image_left ._taxel_recommend_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_image_left ._taxel_ad_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_image_left ._taxel_ad_art_img_2 {
        display: flex;
        width: 27%;
        margin: 2px;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_image_left ._taxel_recommend_art_img:before, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_image_left ._taxel_ad_art_img:before, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_image_left ._taxel_ad_art_img_2:before {
        content: '';
        display: block;
        padding-top: 100%;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_image_left ._taxel_recommend_article {
        display: block;
        white-space: normal;
        /*margin-top: 1px;*/
        overflow: hidden;
        clear: both;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_image_left ._taxel_recommend_content {
        width: 73%;
        display: flex;
        -webkit-flex-flow: column;
        -webkit-jusify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-left: 2%;
        }
        /* ======================================================== */
        /* ----------- カラム1　大画像上画像下タイトル ------------ */
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_row._taxel_column_1._taxel_image_top ._taxel_recommend_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_row._taxel_column_1._taxel_image_top ._taxel_ad_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_row._taxel_column_1._taxel_image_top ._taxel_ad_art_img_2 {
        display: block;
        float: none;
        width: 100%;
        height: auto;
        border: none;
        margin: 0px auto 10px;
        text-align: center;
        overflow: hidden;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_row._taxel_column_1._taxel_image_top ._taxel_recommend_art_img:before, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_row._taxel_column_1._taxel_image_top ._taxel_ad_art_img:before, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_row._taxel_column_1._taxel_image_top ._taxel_ad_art_img_2:before {
        content: '';
        display: block;
        /* 4:3 */
        padding-top: 75%;
        /* 16:9 */
        padding-top: 56.25%;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_row._taxel_column_1._taxel_image_top ._taxel_recommend_content {
        width: 100% !important;
        padding-bottom: 20px;
        }
        /* ======================================================== */
        /* ----------- カラム1　上動画下タイトル ------------ */
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_movie_top {
        position: relative;
        border: none;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_movie_top a {
        display: block;
        width: 100%;
        /*height: 100%;*/
        overflow: hidden;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_row._taxel_column_1._taxel_movie_top ._taxel_recommend_content {
        width: 100%;
        /*height: 100%;*/
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        padding: 10px 10px 40px 10px;
        border-bottom: 1px solid #d9d9d4;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_row._taxel_column_1._taxel_movie_top ._taxel_ad_btn {
        display: inline-block;
        font-size: 12px;
        color: #fff;
        font-weight: normal;
        line-height: 20px;
        padding: 0 10px;
        background-color: #b7b7b7;
        border-radius: 3px;
        text-align: center;
        width: 33%;
        position: absolute;
        bottom: 10px;
        right: 10px;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_row._taxel_column_1._taxel_movie_top ._taxel_ad_art_title {
        /*
            display: block;
            text-align: left;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            display: -webkit-box !important;
            -webkit-box-orient: vertical !important;
            -webkit-line-clamp: 2;
            */
        margin: 0;
        -webkit-line-clamp: inherit;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_movie_top ._taxel_ad_art_sponsor {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: #999;
        font-size: 10px;
        line-height: 12px;
        font-weight: normal;
        text-align: left;
        width: 53%;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_movie_top ._taxel_ad_art_sponsor:before {
        content: 'PR：';
        }
        /* ======================================================== */
        /* ----------- カラム1　右画像左タイトル ------------ */
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_image_right ._taxel_recommend_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_image_right ._taxel_ad_art_img {
        float: right;
        width: 80px;
        height: 80px;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_image_right ._taxel_recommend_article {
        display: block;
        white-space: normal;
        margin-top: 1px;
        overflow: hidden;
        clear: both;
        }
        ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ul._taxel_row._taxel_column_1._taxel_image_right ._taxel_recommend_content {
        text-align: left;
        padding: 0 !important;
        float: left;
        width: calc...'''

        return css