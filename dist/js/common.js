$(document).ready(function(){function e(){s.loading.fadeOut(),s.street_width=$(".street").eq(0).width(),$(".street").eq(1).css("left",s.street_width),$(".street_all").css("margin-left",s.street_width*-1),window.addEventListener("deviceorientation",function(e){n(e)})}function t(){$(".tip_box").fadeOut()}function o(){$(this).hasClass("on")?($(".menuDom").removeClass("on"),$(".menu").addClass("off").removeClass("on"),s.menu_timeout=setTimeout(function(){$(".menu").removeClass("off")},1e3)):($(".menuDom").addClass("on"),clearTimeout(s.menu_timeout),$(".menu").removeClass("off").addClass("on"))}function n(e){var t=Math.floor(s.street_width/360*Math.floor(e.alpha-s.org_street)+s.street_width-$(window).width());console.log(Math.floor(e.alpha-s.org_street)),$(".street_all").css("left",t)}var s={wrp:$(".wrapper"),loading:$(".loading"),menu_timeout:"",org_street:156};$(".street").clone().appendTo(".street_all"),$(".iknow_btn").on("click",t),$(".menubtn").click(o),$(window).load(e)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvd19sb2FkIiwibyIsImxvYWRpbmciLCJmYWRlT3V0Iiwic3RyZWV0X3dpZHRoIiwiZXEiLCJ3aWR0aCIsImNzcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwid2luZG93X2RldmljZW9yaWVudGF0aW9uIiwiaWtub3dfY2xpY2siLCJtZW51YnRuX2NsaWNrIiwidGhpcyIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIm1lbnVfdGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXMiLCJNYXRoIiwiZmxvb3IiLCJhbHBoYSIsIm9yZ19zdHJlZXQiLCJjb25zb2xlIiwibG9nIiwid3JwIiwiY2xvbmUiLCJhcHBlbmRUbyIsIm9uIiwiY2xpY2siLCJsb2FkIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQWVqQixRQUFTQyxLQUNSQyxFQUFFQyxRQUFRQyxVQUNWRixFQUFFRyxhQUFlUCxFQUFFLFdBQVdRLEdBQUcsR0FBR0MsUUFDcENULEVBQUUsV0FBV1EsR0FBRyxHQUFHRSxJQUFJLE9BQU9OLEVBQUVHLGNBQ2hDUCxFQUFFLGVBQWVVLElBQUksY0FBY04sRUFBRUcsaUJBQ3JDSSxPQUFPQyxpQkFBaUIsb0JBQXFCLFNBQVNDLEdBQ3JEQyxFQUF5QkQsS0FNM0IsUUFBU0UsS0FDUmYsRUFBRSxZQUFZTSxVQUVmLFFBQVNVLEtBQ0xoQixFQUFFaUIsTUFBTUMsU0FBUyxPQUNuQmxCLEVBQUUsWUFBWW1CLFlBQVksTUFDMUJuQixFQUFFLFNBQVNvQixTQUFTLE9BQU9ELFlBQVksTUFDdkNmLEVBQUVpQixhQUFlQyxXQUFXLFdBQzNCdEIsRUFBRSxTQUFTbUIsWUFBWSxRQUNyQixPQUdIbkIsRUFBRSxZQUFZb0IsU0FBUyxNQUN2QkcsYUFBYW5CLEVBQUVpQixjQUNmckIsRUFBRSxTQUFTbUIsWUFBWSxPQUFPQyxTQUFTLE9BR3pDLFFBQVNOLEdBQXlCRCxHQUNqQyxHQUFJVyxHQUFNQyxLQUFLQyxNQUFNdEIsRUFBRUcsYUFBZSxJQUFNa0IsS0FBS0MsTUFBTWIsRUFBRWMsTUFBUXZCLEVBQUV3QixZQUFjeEIsRUFBRUcsYUFBZVAsRUFBRVcsUUFBUUYsUUFDNUdvQixTQUFRQyxJQUFJTCxLQUFLQyxNQUFNYixFQUFFYyxNQUFRdkIsRUFBRXdCLGFBQ25DNUIsRUFBRSxlQUFlVSxJQUFJLE9BQU9jLEdBN0M3QixHQUFJcEIsSUFDSDJCLElBQUsvQixFQUFFLFlBQ1BLLFFBQVNMLEVBQUUsWUFDWHFCLGFBQWEsR0FDYk8sV0FBWSxJQUViNUIsR0FBRSxXQUFXZ0MsUUFBUUMsU0FBUyxlQUk5QmpDLEVBQUUsY0FBY2tDLEdBQUcsUUFBUW5CLEdBQzNCZixFQUFFLFlBQVltQyxNQUFNbkIsR0FDcEJoQixFQUFFVyxRQUFReUIsS0FBS2pDIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0Ly9Jbml0XHJcblx0dmFyIG8gPXtcclxuXHRcdHdycDogJCgnLndyYXBwZXInKSxcclxuXHRcdGxvYWRpbmc6ICQoJy5sb2FkaW5nJyksXHJcblx0XHRtZW51X3RpbWVvdXQ6JycsXHJcblx0XHRvcmdfc3RyZWV0OiAxNTZcclxuXHR9O1xyXG5cdCQoJy5zdHJlZXQnKS5jbG9uZSgpLmFwcGVuZFRvKCcuc3RyZWV0X2FsbCcpO1xyXG5cclxuXHJcblx0Ly9BZGRMaXN0ZW5lclxyXG5cdCQoJy5pa25vd19idG4nKS5vbignY2xpY2snLGlrbm93X2NsaWNrKTtcclxuXHQkKCcubWVudWJ0bicpLmNsaWNrKG1lbnVidG5fY2xpY2spO1xyXG5cdCQod2luZG93KS5sb2FkKHdpbmRvd19sb2FkKTtcclxuXHRmdW5jdGlvbiB3aW5kb3dfbG9hZCgpe1xyXG5cdFx0by5sb2FkaW5nLmZhZGVPdXQoKTtcclxuXHRcdG8uc3RyZWV0X3dpZHRoID0gJCgnLnN0cmVldCcpLmVxKDApLndpZHRoKCk7XHJcblx0XHQkKCcuc3RyZWV0JykuZXEoMSkuY3NzKCdsZWZ0JyxvLnN0cmVldF93aWR0aCk7XHJcblx0XHQkKCcuc3RyZWV0X2FsbCcpLmNzcygnbWFyZ2luLWxlZnQnLG8uc3RyZWV0X3dpZHRoKi0xKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHR3aW5kb3dfZGV2aWNlb3JpZW50YXRpb24oZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHQvL0V2ZW50XHJcblx0ZnVuY3Rpb24gaWtub3dfY2xpY2soKXtcclxuXHRcdCQoJy50aXBfYm94JykuZmFkZU91dCgpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBtZW51YnRuX2NsaWNrKCl7XHJcblx0XHRpZigkKHRoaXMpLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0JCgnLm1lbnVEb20nKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHRcdFx0JCgnLm1lbnUnKS5hZGRDbGFzcygnb2ZmJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblx0XHRcdG8ubWVudV90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcubWVudScpLnJlbW92ZUNsYXNzKCdvZmYnKTtcclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHQkKCcubWVudURvbScpLmFkZENsYXNzKCdvbicpO1xyXG5cdFx0XHRjbGVhclRpbWVvdXQoby5tZW51X3RpbWVvdXQpO1xyXG5cdFx0XHQkKCcubWVudScpLnJlbW92ZUNsYXNzKCdvZmYnKS5hZGRDbGFzcygnb24nKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gd2luZG93X2RldmljZW9yaWVudGF0aW9uKGUpIHtcclxuXHRcdHZhciBkaXMgPSBNYXRoLmZsb29yKG8uc3RyZWV0X3dpZHRoIC8gMzYwICogTWF0aC5mbG9vcihlLmFscGhhIC0gby5vcmdfc3RyZWV0KSArIG8uc3RyZWV0X3dpZHRoIC0gJCh3aW5kb3cpLndpZHRoKCkpO1xyXG5cdFx0Y29uc29sZS5sb2coTWF0aC5mbG9vcihlLmFscGhhIC0gby5vcmdfc3RyZWV0KSk7XHJcblx0XHQkKCcuc3RyZWV0X2FsbCcpLmNzcygnbGVmdCcsZGlzKTtcclxuXHR9XHJcblx0XHJcblx0XHJcbn0pLy9yZWFkeSBlbmQgIFxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
