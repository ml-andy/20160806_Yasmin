$(document).ready(function(){function e(){s.loading.fadeOut(),s.street_width=$(".street").eq(0).width(),$(".street").eq(1).css("left",s.street_width),$(".street_all").css("margin-left",s.street_width*-1),window.addEventListener("deviceorientation",function(e){n(e)})}function t(){$(".tip_box").fadeOut()}function o(){$(this).hasClass("on")?($(".menuDom").removeClass("on"),$(".menu").addClass("off").removeClass("on"),s.menu_timeout=setTimeout(function(){$(".menu").removeClass("off")},1e3)):($(".menuDom").addClass("on"),clearTimeout(s.menu_timeout),$(".menu").removeClass("off").addClass("on"))}function n(e){var t=Math.floor(s.street_width/360*Math.floor(e.alpha-s.org_street))*-1;console.log(Math.floor(e.alpha-s.org_street)),$(".street_all").css("left",t)}var s={wrp:$(".wrapper"),loading:$(".loading"),menu_timeout:"",org_street:204};$(".street").clone().appendTo(".street_all"),$(".iknow_btn").on("click",t),$(".menubtn").click(o),$(window).load(e)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvd19sb2FkIiwibyIsImxvYWRpbmciLCJmYWRlT3V0Iiwic3RyZWV0X3dpZHRoIiwiZXEiLCJ3aWR0aCIsImNzcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwid2luZG93X2RldmljZW9yaWVudGF0aW9uIiwiaWtub3dfY2xpY2siLCJtZW51YnRuX2NsaWNrIiwidGhpcyIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIm1lbnVfdGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXMiLCJNYXRoIiwiZmxvb3IiLCJhbHBoYSIsIm9yZ19zdHJlZXQiLCJjb25zb2xlIiwibG9nIiwid3JwIiwiY2xvbmUiLCJhcHBlbmRUbyIsIm9uIiwiY2xpY2siLCJsb2FkIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQWVqQixRQUFTQyxLQUNSQyxFQUFFQyxRQUFRQyxVQUNWRixFQUFFRyxhQUFlUCxFQUFFLFdBQVdRLEdBQUcsR0FBR0MsUUFDcENULEVBQUUsV0FBV1EsR0FBRyxHQUFHRSxJQUFJLE9BQU9OLEVBQUVHLGNBQ2hDUCxFQUFFLGVBQWVVLElBQUksY0FBY04sRUFBRUcsaUJBQ3JDSSxPQUFPQyxpQkFBaUIsb0JBQXFCLFNBQVNDLEdBQ3JEQyxFQUF5QkQsS0FNM0IsUUFBU0UsS0FDUmYsRUFBRSxZQUFZTSxVQUVmLFFBQVNVLEtBQ0xoQixFQUFFaUIsTUFBTUMsU0FBUyxPQUNuQmxCLEVBQUUsWUFBWW1CLFlBQVksTUFDMUJuQixFQUFFLFNBQVNvQixTQUFTLE9BQU9ELFlBQVksTUFDdkNmLEVBQUVpQixhQUFlQyxXQUFXLFdBQzNCdEIsRUFBRSxTQUFTbUIsWUFBWSxRQUNyQixPQUdIbkIsRUFBRSxZQUFZb0IsU0FBUyxNQUN2QkcsYUFBYW5CLEVBQUVpQixjQUNmckIsRUFBRSxTQUFTbUIsWUFBWSxPQUFPQyxTQUFTLE9BR3pDLFFBQVNOLEdBQXlCRCxHQUNqQyxHQUFJVyxHQUFNQyxLQUFLQyxNQUFNdEIsRUFBRUcsYUFBZSxJQUFNa0IsS0FBS0MsTUFBTWIsRUFBRWMsTUFBUXZCLEVBQUV3QixlQUNuRUMsU0FBUUMsSUFBSUwsS0FBS0MsTUFBTWIsRUFBRWMsTUFBUXZCLEVBQUV3QixhQUNuQzVCLEVBQUUsZUFBZVUsSUFBSSxPQUFPYyxHQTdDN0IsR0FBSXBCLElBQ0gyQixJQUFLL0IsRUFBRSxZQUNQSyxRQUFTTCxFQUFFLFlBQ1hxQixhQUFhLEdBQ2JPLFdBQVksSUFFYjVCLEdBQUUsV0FBV2dDLFFBQVFDLFNBQVMsZUFJOUJqQyxFQUFFLGNBQWNrQyxHQUFHLFFBQVFuQixHQUMzQmYsRUFBRSxZQUFZbUMsTUFBTW5CLEdBQ3BCaEIsRUFBRVcsUUFBUXlCLEtBQUtqQyIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cdC8vSW5pdFxyXG5cdHZhciBvID17XHJcblx0XHR3cnA6ICQoJy53cmFwcGVyJyksXHJcblx0XHRsb2FkaW5nOiAkKCcubG9hZGluZycpLFxyXG5cdFx0bWVudV90aW1lb3V0OicnLFxyXG5cdFx0b3JnX3N0cmVldDogMjA0XHJcblx0fTtcclxuXHQkKCcuc3RyZWV0JykuY2xvbmUoKS5hcHBlbmRUbygnLnN0cmVldF9hbGwnKTtcclxuXHJcblxyXG5cdC8vQWRkTGlzdGVuZXJcclxuXHQkKCcuaWtub3dfYnRuJykub24oJ2NsaWNrJyxpa25vd19jbGljayk7XHJcblx0JCgnLm1lbnVidG4nKS5jbGljayhtZW51YnRuX2NsaWNrKTtcclxuXHQkKHdpbmRvdykubG9hZCh3aW5kb3dfbG9hZCk7XHJcblx0ZnVuY3Rpb24gd2luZG93X2xvYWQoKXtcclxuXHRcdG8ubG9hZGluZy5mYWRlT3V0KCk7XHJcblx0XHRvLnN0cmVldF93aWR0aCA9ICQoJy5zdHJlZXQnKS5lcSgwKS53aWR0aCgpO1xyXG5cdFx0JCgnLnN0cmVldCcpLmVxKDEpLmNzcygnbGVmdCcsby5zdHJlZXRfd2lkdGgpO1xyXG5cdFx0JCgnLnN0cmVldF9hbGwnKS5jc3MoJ21hcmdpbi1sZWZ0JyxvLnN0cmVldF93aWR0aCotMSk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0d2luZG93X2RldmljZW9yaWVudGF0aW9uKGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly9FdmVudFxyXG5cdGZ1bmN0aW9uIGlrbm93X2NsaWNrKCl7XHJcblx0XHQkKCcudGlwX2JveCcpLmZhZGVPdXQoKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gbWVudWJ0bl9jbGljaygpe1xyXG5cdFx0aWYoJCh0aGlzKS5oYXNDbGFzcygnb24nKSl7XHJcblx0XHRcdCQoJy5tZW51RG9tJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblx0XHRcdCQoJy5tZW51JykuYWRkQ2xhc3MoJ29mZicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cdFx0XHRvLm1lbnVfdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnLm1lbnUnKS5yZW1vdmVDbGFzcygnb2ZmJyk7XHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0JCgnLm1lbnVEb20nKS5hZGRDbGFzcygnb24nKTtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KG8ubWVudV90aW1lb3V0KTtcclxuXHRcdFx0JCgnLm1lbnUnKS5yZW1vdmVDbGFzcygnb2ZmJykuYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHdpbmRvd19kZXZpY2VvcmllbnRhdGlvbihlKSB7XHJcblx0XHR2YXIgZGlzID0gTWF0aC5mbG9vcihvLnN0cmVldF93aWR0aCAvIDM2MCAqIE1hdGguZmxvb3IoZS5hbHBoYSAtIG8ub3JnX3N0cmVldCkpICogLTE7XHJcblx0XHRjb25zb2xlLmxvZyhNYXRoLmZsb29yKGUuYWxwaGEgLSBvLm9yZ19zdHJlZXQpKTtcclxuXHRcdCQoJy5zdHJlZXRfYWxsJykuY3NzKCdsZWZ0JyxkaXMpO1xyXG5cdH1cclxuXHRcclxuXHRcclxufSkvL3JlYWR5IGVuZCAgXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
