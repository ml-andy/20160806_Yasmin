$(document).ready(function(){function e(){a.loading.fadeOut(),a.street_width=$(".street").eq(0).width(),$(".street").eq(1).css("left",a.street_width),$(".street_all").css("margin-left",a.street_width*-1),window.addEventListener("deviceorientation",function(e){n(e)})}function t(){function e(e){device.mobile()&&(e=e.originalEvent.touches[0]),r=e.pageX-o,a.org_street-=r/a.street_width*360,device.mobile()?a.org_street<0?a.org_street=a.org_street+360:a.org_street>360&&(a.org_street=a.org_street-360):a.org_street<-180?a.org_street=a.org_street+360:a.org_street>180&&(a.org_street=a.org_street-360),s()}var t=$(this),o=0,r=0;t.on("touchstart",function(r){r.preventDefault(),device.mobile()&&(r=r.originalEvent.touches[0]),o=r.pageX,a.street_ctrl=!1,t.bind("touchmove",e)}),t.on("touchend",function(){a.street_ctrl=!0,t.unbind("touchmove",e)})}function o(){$(".tip_box").fadeOut()}function r(){$(this).hasClass("on")?($(".menuDom").removeClass("on"),$(".menu").addClass("off").removeClass("on"),a.menu_timeout=setTimeout(function(){a.street_ctrl=!0,$(".menu").removeClass("off")},1e3)):(a.street_ctrl=!1,$(".menuDom").addClass("on"),clearTimeout(a.menu_timeout),$(".menu").removeClass("off").addClass("on"))}function n(e){0==a.alpha?a.street_alpha=e.alpha:a.street_alpha=e.alpha-a.alpha,a.street_ctrl&&s()}function s(){var e=Math.floor(a.street_width/360*Math.floor(a.street_alpha-a.org_street)+$(window).width());$(".street_all").css("left",e)}var a={wrp:$(".wrapper"),loading:$(".loading"),menu_timeout:"",org_street:179,alpha:0,street_alpha:0,street_ctrl:!0};$(".street").clone().appendTo(".street_all"),$(".street_all").each(t),$(".iknow_btn").on("click",o),$(".menubtn").click(r),$(window).load(e)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvd19sb2FkIiwibyIsImxvYWRpbmciLCJmYWRlT3V0Iiwic3RyZWV0X3dpZHRoIiwiZXEiLCJ3aWR0aCIsImNzcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwid2luZG93X2RldmljZW9yaWVudGF0aW9uIiwic3RyZWV0X2FsbCIsIl90b3VjaG1vdmUiLCJkZXZpY2UiLCJtb2JpbGUiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsImRyYWdfbGVmdCIsInBhZ2VYIiwib2dfbGVmdCIsIm9yZ19zdHJlZXQiLCJzdHJlZXRfbW92ZSIsIl90aGlzIiwidGhpcyIsIm9uIiwicHJldmVudERlZmF1bHQiLCJzdHJlZXRfY3RybCIsImJpbmQiLCJ1bmJpbmQiLCJpa25vd19jbGljayIsIm1lbnVidG5fY2xpY2siLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJtZW51X3RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYWxwaGEiLCJzdHJlZXRfYWxwaGEiLCJkaXMiLCJNYXRoIiwiZmxvb3IiLCJ3cnAiLCJjbG9uZSIsImFwcGVuZFRvIiwiZWFjaCIsImNsaWNrIiwibG9hZCJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0FrQmpCLFFBQVNDLEtBQ1JDLEVBQUVDLFFBQVFDLFVBQ1ZGLEVBQUVHLGFBQWVQLEVBQUUsV0FBV1EsR0FBRyxHQUFHQyxRQUNwQ1QsRUFBRSxXQUFXUSxHQUFHLEdBQUdFLElBQUksT0FBT04sRUFBRUcsY0FDaENQLEVBQUUsZUFBZVUsSUFBSSxjQUFjTixFQUFFRyxpQkFDckNJLE9BQU9DLGlCQUFpQixvQkFBcUIsU0FBU0MsR0FDckRDLEVBQXlCRCxLQUszQixRQUFTRSxLQWlCUixRQUFTQyxHQUFXSCxHQUNoQkksT0FBT0MsV0FBVUwsRUFBSUEsRUFBRU0sY0FBY0MsUUFBUSxJQUN2Q0MsRUFBWVIsRUFBRVMsTUFBUUMsRUFDL0JuQixFQUFFb0IsWUFBY0gsRUFBWWpCLEVBQUVHLGFBQWUsSUFDMUNVLE9BQU9DLFNBQ05kLEVBQUVvQixXQUFhLEVBQUdwQixFQUFFb0IsV0FBYXBCLEVBQUVvQixXQUFhLElBQzNDcEIsRUFBRW9CLFdBQWEsTUFBS3BCLEVBQUVvQixXQUFhcEIsRUFBRW9CLFdBQVksS0FFdERwQixFQUFFb0IsZ0JBQW1CcEIsRUFBRW9CLFdBQVlwQixFQUFFb0IsV0FBYSxJQUM3Q3BCLEVBQUVvQixXQUFhLE1BQUtwQixFQUFFb0IsV0FBYXBCLEVBQUVvQixXQUFZLEtBRTFEQyxJQTNCRCxHQUFJQyxHQUFRMUIsRUFBRTJCLE1BQ2JKLEVBQVUsRUFDVkYsRUFBWSxDQUViSyxHQUFNRSxHQUFHLGFBQWMsU0FBU2YsR0FDL0JBLEVBQUVnQixpQkFDQ1osT0FBT0MsV0FBVUwsRUFBSUEsRUFBRU0sY0FBY0MsUUFBUSxJQUN2Q0csRUFBVVYsRUFBRVMsTUFDckJsQixFQUFFMEIsYUFBYyxFQUNoQkosRUFBTUssS0FBSyxZQUFhZixLQUV6QlUsRUFBTUUsR0FBRyxXQUFZLFdBQ3BCeEIsRUFBRTBCLGFBQWMsRUFDaEJKLEVBQU1NLE9BQU8sWUFBYWhCLEtBaUI1QixRQUFTaUIsS0FDUmpDLEVBQUUsWUFBWU0sVUFFZixRQUFTNEIsS0FDTGxDLEVBQUUyQixNQUFNUSxTQUFTLE9BQ25CbkMsRUFBRSxZQUFZb0MsWUFBWSxNQUMxQnBDLEVBQUUsU0FBU3FDLFNBQVMsT0FBT0QsWUFBWSxNQUN2Q2hDLEVBQUVrQyxhQUFlQyxXQUFXLFdBQzNCbkMsRUFBRTBCLGFBQWMsRUFDaEI5QixFQUFFLFNBQVNvQyxZQUFZLFFBQ3JCLE9BR0hoQyxFQUFFMEIsYUFBYyxFQUNoQjlCLEVBQUUsWUFBWXFDLFNBQVMsTUFDdkJHLGFBQWFwQyxFQUFFa0MsY0FDZnRDLEVBQUUsU0FBU29DLFlBQVksT0FBT0MsU0FBUyxPQUd6QyxRQUFTdkIsR0FBeUJELEdBQ25CLEdBQVhULEVBQUVxQyxNQUFZckMsRUFBRXNDLGFBQWU3QixFQUFFNEIsTUFDL0JyQyxFQUFFc0MsYUFBZTdCLEVBQUU0QixNQUFRckMsRUFBRXFDLE1BQy9CckMsRUFBRTBCLGFBQWFMLElBRW5CLFFBQVNBLEtBQ1IsR0FBSWtCLEdBQU1DLEtBQUtDLE1BQU16QyxFQUFFRyxhQUFlLElBQU1xQyxLQUFLQyxNQUFPekMsRUFBRXNDLGFBQWV0QyxFQUFFb0IsWUFBY3hCLEVBQUVXLFFBQVFGLFFBQ25HVCxHQUFFLGVBQWVVLElBQUksT0FBT2lDLEdBcEY3QixHQUFJdkMsSUFDSDBDLElBQUs5QyxFQUFFLFlBQ1BLLFFBQVNMLEVBQUUsWUFDWHNDLGFBQWEsR0FDYmQsV0FBWSxJQUNaaUIsTUFBTyxFQUNQQyxhQUFjLEVBQ2RaLGFBQWEsRUFFZDlCLEdBQUUsV0FBVytDLFFBQVFDLFNBQVMsZUFHOUJoRCxFQUFFLGVBQWVpRCxLQUFLbEMsR0FDdEJmLEVBQUUsY0FBYzRCLEdBQUcsUUFBUUssR0FDM0JqQyxFQUFFLFlBQVlrRCxNQUFNaEIsR0FDcEJsQyxFQUFFVyxRQUFRd0MsS0FBS2hEIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0Ly9Jbml0XHJcblx0dmFyIG8gPXtcclxuXHRcdHdycDogJCgnLndyYXBwZXInKSxcclxuXHRcdGxvYWRpbmc6ICQoJy5sb2FkaW5nJyksXHJcblx0XHRtZW51X3RpbWVvdXQ6JycsXHJcblx0XHRvcmdfc3RyZWV0OiAxNzksXHJcblx0XHRhbHBoYTogMCxcclxuXHRcdHN0cmVldF9hbHBoYTogMCxcclxuXHRcdHN0cmVldF9jdHJsOiB0cnVlXHJcblx0fTtcclxuXHQkKCcuc3RyZWV0JykuY2xvbmUoKS5hcHBlbmRUbygnLnN0cmVldF9hbGwnKTtcclxuXHJcblx0Ly9BZGRMaXN0ZW5lclxyXG5cdCQoJy5zdHJlZXRfYWxsJykuZWFjaChzdHJlZXRfYWxsKTtcclxuXHQkKCcuaWtub3dfYnRuJykub24oJ2NsaWNrJyxpa25vd19jbGljayk7XHJcblx0JCgnLm1lbnVidG4nKS5jbGljayhtZW51YnRuX2NsaWNrKTtcclxuXHQkKHdpbmRvdykubG9hZCh3aW5kb3dfbG9hZCk7XHJcblx0ZnVuY3Rpb24gd2luZG93X2xvYWQoKXtcclxuXHRcdG8ubG9hZGluZy5mYWRlT3V0KCk7XHJcblx0XHRvLnN0cmVldF93aWR0aCA9ICQoJy5zdHJlZXQnKS5lcSgwKS53aWR0aCgpO1xyXG5cdFx0JCgnLnN0cmVldCcpLmVxKDEpLmNzcygnbGVmdCcsby5zdHJlZXRfd2lkdGgpO1xyXG5cdFx0JCgnLnN0cmVldF9hbGwnKS5jc3MoJ21hcmdpbi1sZWZ0JyxvLnN0cmVldF93aWR0aCotMSk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0d2luZG93X2RldmljZW9yaWVudGF0aW9uKGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvL0V2ZW50XHJcblx0ZnVuY3Rpb24gc3RyZWV0X2FsbCgpe1xyXG5cdFx0dmFyIF90aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0b2dfbGVmdCA9IDAsXHJcblx0XHRcdGRyYWdfbGVmdCA9IDA7XHJcblxyXG5cdFx0X3RoaXMub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRpZihkZXZpY2UubW9iaWxlKCkpe2UgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTt9XHJcbiAgICAgICAgICAgIG9nX2xlZnQgPSBlLnBhZ2VYO1xyXG5cdFx0XHRvLnN0cmVldF9jdHJsID0gZmFsc2U7XHJcblx0XHRcdF90aGlzLmJpbmQoJ3RvdWNobW92ZScsIF90b3VjaG1vdmUpO1xyXG5cdFx0fSk7XHJcblx0XHRfdGhpcy5vbigndG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRvLnN0cmVldF9jdHJsID0gdHJ1ZTtcclxuXHRcdFx0X3RoaXMudW5iaW5kKCd0b3VjaG1vdmUnLCBfdG91Y2htb3ZlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGZ1bmN0aW9uIF90b3VjaG1vdmUoZSl7XHJcblx0XHRcdGlmKGRldmljZS5tb2JpbGUoKSl7ZSA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO31cclxuICAgICAgICAgICAgZHJhZ19sZWZ0ID0gZS5wYWdlWCAtIG9nX2xlZnQ7XHJcblx0XHRcdG8ub3JnX3N0cmVldCAtPSBkcmFnX2xlZnQgLyBvLnN0cmVldF93aWR0aCAqIDM2MDtcclxuXHRcdFx0aWYoZGV2aWNlLm1vYmlsZSgpKXtcclxuXHRcdFx0XHRpZihvLm9yZ19zdHJlZXQgPCAwKSBvLm9yZ19zdHJlZXQgPSBvLm9yZ19zdHJlZXQgKyAzNjA7XHJcblx0XHRcdFx0ZWxzZSBpZihvLm9yZ19zdHJlZXQgPiAzNjApIG8ub3JnX3N0cmVldCA9IG8ub3JnX3N0cmVldCAtMzYwO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRpZihvLm9yZ19zdHJlZXQgPCAtMTgwKSBvLm9yZ19zdHJlZXQ9IG8ub3JnX3N0cmVldCArIDM2MDtcclxuXHRcdFx0XHRlbHNlIGlmKG8ub3JnX3N0cmVldCA+IDE4MCkgby5vcmdfc3RyZWV0ID0gby5vcmdfc3RyZWV0IC0zNjA7XHJcblx0XHRcdH1cclxuXHRcdFx0c3RyZWV0X21vdmUoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gaWtub3dfY2xpY2soKXtcclxuXHRcdCQoJy50aXBfYm94JykuZmFkZU91dCgpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBtZW51YnRuX2NsaWNrKCl7XHJcblx0XHRpZigkKHRoaXMpLmhhc0NsYXNzKCdvbicpKXtcclxuXHRcdFx0JCgnLm1lbnVEb20nKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHRcdFx0JCgnLm1lbnUnKS5hZGRDbGFzcygnb2ZmJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblx0XHRcdG8ubWVudV90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRvLnN0cmVldF9jdHJsID0gdHJ1ZTtcclxuXHRcdFx0XHQkKCcubWVudScpLnJlbW92ZUNsYXNzKCdvZmYnKTtcclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRvLnN0cmVldF9jdHJsID0gZmFsc2U7XHJcblx0XHRcdCQoJy5tZW51RG9tJykuYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRcdGNsZWFyVGltZW91dChvLm1lbnVfdGltZW91dCk7XHJcblx0XHRcdCQoJy5tZW51JykucmVtb3ZlQ2xhc3MoJ29mZicpLmFkZENsYXNzKCdvbicpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmdW5jdGlvbiB3aW5kb3dfZGV2aWNlb3JpZW50YXRpb24oZSkge1xyXG5cdFx0aWYoby5hbHBoYSA9PSAwKSBvLnN0cmVldF9hbHBoYSA9IGUuYWxwaGE7XHJcblx0XHRlbHNlIG8uc3RyZWV0X2FscGhhID0gZS5hbHBoYSAtIG8uYWxwaGE7XHJcblx0XHRpZihvLnN0cmVldF9jdHJsKSBzdHJlZXRfbW92ZSgpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBzdHJlZXRfbW92ZSgpe1xyXG5cdFx0dmFyIGRpcyA9IE1hdGguZmxvb3Ioby5zdHJlZXRfd2lkdGggLyAzNjAgKiBNYXRoLmZsb29yKCBvLnN0cmVldF9hbHBoYSAtIG8ub3JnX3N0cmVldCkgKyAkKHdpbmRvdykud2lkdGgoKSk7XHJcblx0XHQkKCcuc3RyZWV0X2FsbCcpLmNzcygnbGVmdCcsZGlzKTtcclxuXHR9XHJcblx0XHJcbn0pLy9yZWFkeSBlbmQgIFxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
