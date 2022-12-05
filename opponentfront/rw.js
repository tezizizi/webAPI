
// const article_url = document.location.search.substring(1);
const article_url = document.location.href;

const API_URL = "http://127.0.0.1:8000/api/articles/?article_url=" + article_url;

console.log(API_URL);
console.log(this);
//APIが出来たら以下のURLをAPI_URLに書き換える
fetch(API_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    //すべての記事データを取得出来ることを確認
    console.log(data);
    let html = data[0].html;
    let css = data[0].css;

    //{html:"<div>....</div>,css:<style></style>"}のような型のものを取得する。

    const rwSpace = document.getElementById("div_rwsample");
    const div = document.createElement("div");
    div.innerHTML = html + css;
    rwSpace.before(div);
  })
  .catch((error) => {
    console.log("失敗しました");
  });

//本来送られてくる部分を直書き
const html = `<div class="_taxel_recommend_articles _taxel_recommend_container" gmo_css="cls_rwsample_1" data-animate="">\n
    <div class="_taxel_recommend_header">
    <h2>あなたにオススメ</h2>
    </div>
    <ul class="taxel_ul_wrap">
        <li>
            <ul class="_taxel_row _taxel_column_1 _taxel_image_left">
                <li style='display:none' class='_taxel_recommend_article_show'>
                    <div class='_taxel_recommend_article'>
                        <a href="google.com" onmousedown='this.href={}'
                            target='_top'>
                            <img class='_taxel_recommend_art_img' src='/opponentfront/img/neko.png' />
                            <div class='_taxel_recommend_content'>
                                <div class='_taxel_recommend_art_title'>{{title_1}}</div>
                            </div>
                            <div style='clear:both'></div>
                        </a>
                    </div>
                </li>
            </ul>
        </li>
        <li>
            <ul class="_taxel_row _taxel_column_1 _taxel_image_left">
                <li style='display:none' class='_taxel_recommend_article_show'>
                    <div class='_taxel_recommend_article'>
                        <a href='{{media_url_1}}' onclick='' onmousedown='this.href="{{onmousedown_url_1}}'
                            target='_top'>
                            <img class='_taxel_recommend_art_img' src='{{image_url_1}}' />
                            <div class='_taxel_recommend_content'>
                                <div class='_taxel_recommend_art_title'>{{title_1}}</div>
                            </div>
                            <div style='clear:both'></div>
                        </a>
                    </div>
                </li>
            </ul>
        </li>
        <li>
            <ul class="_taxel_row _taxel_column_1 _taxel_image_left">
                <li style='display:none' class='_taxel_recommend_article_show'>
                    <div class='_taxel_recommend_article'>
                        <a href='{{media_url_2}}' onclick='' onmousedown='this.href="{{onmousedown_url_2}}'
                            target='_top'>
                            <img class='_taxel_recommend_art_img' src='{{image_url_2}}' />
                            <div class='_taxel_recommend_content'>
                                <div class='_taxel_recommend_art_title'>{{title_2}}</div>
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

</div>`;

const css = `<style type='text/css'>
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
  width: calc(100% - 90px);
  width: -webkit-calc(100% - 90px);
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_1._taxel_image_right li ._taxel_ad_art_org_sponsor, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_1._taxel_image_right._taxel_image_right li ._taxel_sponsored, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_1._taxel_image_right li ._taxel_ad_art_sponsor, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_1._taxel_image_right li ._taxel_recommend_art_date, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_1._taxel_image_right li ._taxel_recommend_art_optional {
  display: inline-block;
  color: #999;
  font-size: 10px;
  line-height: 12px;
  font-weight: normal;
  position: absolute;
  bottom: 10px;
  left: 10px;
}

/* ======================================================== */

/* ----------- カラム2 ------------ */

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li {
  /* width: calc(50% - 1px);
  width: -webkit-calc(50% - 1px); */
  width: 50%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  overflow: hidden;
  vertical-align: top;
  /* border-bottom: 1px solid #d9d9d4; */
  float: left;
  padding: 3% 3% 3% 1.5%;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li:first-child {
  width: 50%;
  /* border-right: 1px solid #d9d9d4; */
  padding: 3% 1.5% 3% 3%;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li a {
  /* height: 220px; */
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  overflow: hidden;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_recommend_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_ad_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_ad_art_img_2 {
  width: 100%;
  margin: 0 0 4%;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_recommend_art_img:before, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_ad_art_img:before, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_ad_art_img_2:before {
  content: '';
  display: block;
  padding-top: 80%;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_recommend_content {
  width: 100%;
  height: 80px;
  padding: 0;
}

/* ======================================================== */

/* ----------- カラム2 全画面表示用 ------------ */

/* ///////////////////////////////////////////
._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_recommend_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_ad_art_img,._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_recommend_content{
    float: none !% important;
}
._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li {
    border-bottom: 3px solid #fff;
}
._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li:first-child {
    border-right: 3px solid #fff;
}
._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li a {
    padding: 0;
    height: 220px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    overflow: hidden;
}
._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_recommend_art_title,._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_art_title {
    display: block;
    color: #fff;
    text-align: left;
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    display: -webkit-box !important;
    -webkit-box-orient: vertical !important;
    -webkit-line-clamp: 2;
    position: absolute;
    bottom: 25px;
    left: 10px;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
width: -webkit-calc(100% - 20px) ;
    width: calc(100% - 20px) ;
    height: 55px;
    vertical-align: top !important;
}
._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_recommend_art_img ,._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_ad_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_art_img_2 {
    width: 100%;
    height: 220px;
}
._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_2 li ._taxel_recommend_content {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.01), rgba(0,0,0,0.8));
}
///////////////////////////////////////////*/

/* ----------- 全画面表示用 ここまで ------------ */

/* ======================================================== */

/* ----------- カラム3 ------------ */

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li {
  /* width: 33%; */
  width: calc(100% / 3);
  width: -webkit-calc(100% / 3);
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  overflow: hidden;
  vertical-align: top;
  border-bottom: 1px solid #d9d9d4;
  float: left;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li:first-child {
  border-right: 1px solid #d9d9d4;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li:nth-child(2) {
  border-right: 1px solid #d9d9d4;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li a {
  padding: 10px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  overflow: hidden;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_recommend_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_ad_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_ad_art_img_2 {
  width: 100%;
  height: 90px;
  margin: 0 0 5px;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_recommend_art_img:before, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_ad_art_img:before, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_ad_art_img_2:before {
  content: '';
  display: block;
  /* 4:3 */
  padding-top: 75%;
  /* 16:9 */
  padding-top: 56.25%;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_recommend_content {
  width: 100%;
  height: ;
  padding: 0;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_recommend_art_title, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_3 li ._taxel_ad_art_title {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 4;
}

/* ======================================================== */

/* ----------- カラム4 ------------ */

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li {
  /* width: 25%; */
  width: calc(100% / 4);
  width: -webkit-calc(100% / 4);
  border-right: 1px solid #d9d9d4;
  float: left;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li:first-child {
  border-left: 1px solid #d9d9d4 !important;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li a {
  display: block !important;
  padding: 5px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  overflow: hidden;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_recommend_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_ad_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_ad_art_img_2 {
  width: 100%;
  margin: 0 0 5px;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_recommend_art_img:before, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_ad_art_img:before, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_ad_art_img_2:before {
  content: '';
  display: block;
  /* 4:3 */
  padding-top: 75%;
  /* 16:9 */
  padding-top: 56.25%;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_recommend_content {
  width: 100%;
  height: ;
  padding: 0;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_recommend_art_title, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_4 li ._taxel_ad_art_title {
  /*overflow: hidden !important;
    text-overflow: ellipsis !important;
    display: -webkit-box !important;
    -webkit-box-orient: vertical !important;
    -webkit-line-clamp: 4;*/
}

/* ======================================================== */

/* ----------- カラム5 ------------ */

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_5 li {
  /* width: 20%; */
  width: calc(100% / 5);
  width: -webkit-calc(100% / 4);
  height: 200px;
  border-right: 1px solid #d9d9d4;
  float: left;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_5 li:first-child {
  border-left: 1px solid #d9d9d4 !important;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_5 li a {
  display: block !important;
  padding: 5px;
  height: 200px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  overflow: hidden;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_5 li ._taxel_recommend_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_5 li ._taxel_ad_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_5 li ._taxel_ad_art_img_2 {
  width: 100%;
  margin: 0 0 5px;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_5 li ._taxel_recommend_art_img:before, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_5 li ._taxel_ad_art_img:before, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_5 li ._taxel_ad_art_img_2:before {
  content: '';
  display: block;
  /* 4:3 */
  padding-top: 75%;
  /* 16:9 */
  padding-top: 56.25%;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_5 li ._taxel_recommend_content {
  width: 100%;
  padding: 0;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_5 li ._taxel_recommend_art_title, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_5 li ._taxel_ad_art_title {
  /*overflow: hidden !important;
    text-overflow: ellipsis !important;
    display: -webkit-box !important;
    -webkit-box-orient: vertical !important;
    -webkit-line-clamp: 4;*/
}

/* ======================================================== */

/* ----------- カラム9 スライダー ------------ */

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_9 li {
  width: 120px;
  height: 100px;
  float: left;
  margin: 0 5px 0 0;
  max-width: 120px;
  overflow: hidden;
}

/*._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_9 li:first-child {
    margin: 0 10px;
}*/

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_9 li a {
  display: block !important;
  width: 120px;
  height: 100px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_9 li ._taxel_recommend_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_9 li ._taxel_ad_art_img, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_9 li ._taxel_ad_art_img_2 {
  width: 120px;
  height: 100px;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_9 li ._taxel_recommend_content {
  width: 100%;
  height: 55%;
  padding: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  /*background: linear-gradient(to bottom, rgba(0,0,0,0.01), rgba(0,0,0,0.8));*/
  background: rgba(0, 0, 0, 0.3);
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_9 li ._taxel_recommend_art_title, ._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_9 li ._taxel_ad_art_title {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 2;
  font-size: 10px;
  color: #fff;
  line-height: 1.5;
  font-weight: normal;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_9 li ._taxel_recommend_art_title {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 2;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_column_9 li ._taxel_sponsored {
  display: inline-block;
  color: #fff;
  font-size: 9px;
  font-weight: normal;
  position: absolute;
  bottom: 5px;
  right: 5px;
  text-align: left;
}

/* ======================================================== */

._taxel_recommend_articles ._taxel_base_animate {
  -webkit-transition: all 800ms ease-out;
  -moz-transition: all 800ms ease-out;
  -ms-transition: all 800ms ease-out;
  -o-transition: all 800ms ease-out;
  transition: all 800ms ease-out;
}

._taxel_recommend_articles ._taxel_base_animate._taxel_animate_1 {
  opacity: 0;
}

._taxel_recommend_articles ._taxel_base_animate._taxel_animate_2 {
  opacity: 0;
  transform: translateY(50%);
  -webkit-transfrom: translateY(50%);
}

._taxel_recommend_articles ._taxel_base_animate._taxel_animate_3 {
  opacity: 0;
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_type_criteo ._taxel_ad_art_img {
  background-size: contain !important;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_type_criteo ._taxel_ad_art_title {}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] .taxel-ad-frame {
  width: 100%;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_banner {
  /*margin: 0px auto;*/
  padding: 0px 0;
  border-bottom: 0px solid #fff;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_banner>iframe {
  margin: 0px auto;
  text-align: center !important;
  width: 320px;
  max-width: 100%;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_banner>taxel-adsense {
  text-align: center !important;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_mark {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_mark span {
  font-size: 10px;
  color: #999;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_mark a {
  padding: 0 !important;
  margin: 0 !important;
  width: 10px !important;
  height: 10px !important;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_mark a img {
  vertical-align: top;
  width: 10px !important;
  height: 10px !important;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_mark._taxel_ad_mark_ydn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: auto;
  height: auto;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_mark._taxel_ad_mark_ydn a {
  padding: 0 !important;
  margin: 0 !important;
  width: 110px !important;
  height: 13px !important;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_mark._taxel_ad_mark_ydn span {
  vertical-align: top;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_ad_mark._taxel_ad_mark_ydn a img {
  vertical-align: top;
  width: 10px !important;
  height: 10px !important;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_recommend_credit {
  font-size: 11px;
  margin: 3px 3px 0px 0px;
  text-align: right;
  color: #000;
}

._taxel_recommend_container[gmo_css='cls_rwsample_1'] ._taxel_recommend_credit_image {
  display: inline-block;
  width: 45px;
  height: 16px;
  margin: 0px 0 0 3px;
  background-image: url(//images.taxel.jp/images/default/00/taxel.png);
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: 100%;
  vertical-align: text-bottom;
}

</style>`

// window.RWSAMPLE = window.RWSAMPLE || {};
// const API_URL = "https://rwsample-run-ltt3jom2ha-an.a.run.app/widget";

// /**
//  * location.href → article_id（SHA256）
//  */
// async function digestMessage(message) {
//   const msgUint8 = new TextEncoder().encode(message);
//   const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
//   const hashArray = Array.from(new Uint8Array(hashBuffer));
//   const hashHex = hashArray
//     .map((b) => b.toString(16).padStart(2, "0"))
//     .join("");
//   return hashHex;
// }

// RWSAMPLE = {
//   apiRequest: function () {
//     digestMessage(location.href).then((digestHex) => {
//       let element = document.createElement("script");
//       element.src =
//         API_URL +
//         "?wi=" +
//         RWSAMPLE.widgetId +
//         "&laid=" +
//         digestHex +
//         "&lu=" +
//         encodeURIComponent(location.href);
//       element.async = true;
//       element.type = "text/javascript";
//       const node = document.getElementById("div_rwsample");
//       node.parentNode.insertBefore(element, node);
//     });
//   },
//   insertRecommendWidget: function (json) {
//     console.log(json);
//     const divTag = document.getElementById("div_rwsample");
//     divTag.innerHTML = RWSAMPLE.decodeHtml(json.html + json.css);
//     divTag.className = "cls_rwsample_" + RWSAMPLE.widgetId;
//   },

//   decodeHtml: function (html) {
//     var txt = document.createElement("textarea");
//     txt.innerHTML = html;
//     return txt.value;
//   },
// };

// RWSAMPLE.widgetId = 1;
// RWSAMPLE.apiRequest(RWSAMPLE.widgetId);
