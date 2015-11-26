var chapterList, currentChapter, chapter;

if (document.location.href.match(/\//ig).length >= 5 && document.location.href.indexOf('?all') == -1) {
	console.log('go all');
	document.location = document.location.href+'?all';
}

$(document).ready(function() {
  // Trollface image must be at 'my_extension/images/trollface.jpg'.
  console.log(document.location.href.match(/\//ig).length);

  // $('#banner728').css('display','none');
  // $('.burst_ad_footerboard').css('display','none');

  chapterList = $(".cbo_wpm_chp > option");
  
});


$(document).keypress(function(e) {
	var currentChapter = 0;
	for (var i = 0; i < chapterList.length; i++) {
	    if(chapterList[i].selected) currentChapter = i;
	}

	var confirm_text =
	[
	"จะอ่านตอนต่อไปเลยใช่ปะ?",
	"มีงานมีการทำก็ไปทำบ้างนะ",
	"เหนื่อยมั้ยคนดีมีพี่เป็นแฟน",
	"เพลินเลยนะมึง",
	"ไง เรื่องนี้หนุกปะ",
	"จะอ่านอีกเรอะ",
	"พอใจยังงง"
	];

	var n = Math.floor(Math.random()*confirm_text.length);
	var confirm_nav = confirm(confirm_text[n]);
	if(confirm_nav && e.which == 13 && document.location.href.match(/\//ig).length >= 5) {
		tokens = document.location.href.split('/').slice(0,4);
		// chapter = parseInt(document.location.href.split('/').slice(4,5));
		chapter = chapterList[currentChapter-1].value;
		document.location = tokens.join('/')+'/'+chapter+'/?all';
	}

	if(e.which == 32){
		document.location = "http://www.niceoppai.net";
	}
});