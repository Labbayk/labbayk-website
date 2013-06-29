//Zebra Style Table *******************************/

$(document).ready(function() {
$("table.tablecolors tr:even").addClass("even");
$("table.tablecolors tr:odd").addClass("odd"); //This is not required - you can avoid this if you have a table background
$("table.tablecolors tr").hover(function(){
$(this).addClass("hovcolor");
}, function(){
$(this).removeClass("hovcolor");
});
$("table.tablecolors tr").click(function(){
//$("table.tablecolors tr").removeClass("highlightcolor"); // Remove this line if you dont want to de-highlight the previously highlighted row
$(this).toggleClass("highlightcolor");
});
});


//Highlight Current Page *******************************/

$(function(){
		$page = jQuery.url.attr("file");
		if(!$page) {
			$page = 'index.html';
		}
		$('ul.menunav li a').each(function(){
			var $href = $(this).attr('href');
			if ( ($href == $page) || ($href == '') ) {
				$(this).addClass('currentpage');
			} else {
				$(this).removeClass('currentpage');
			}
		});
	});


//Highlight Current Result Page *******************************/

$(function(){
		$page = jQuery.url.attr("file");
		if(!$page) {
			$page = 'index.html';
		}
		$('ul.navigation li a').each(function(){
			var $href = $(this).attr('href');
			if ( ($href == $page) || ($href == '') ) {
				$(this).addClass('on');
			} else {
				$(this).removeClass('on');
			}
		});
	});