/* Great! You're intersted in code. So do we. We keep creating and pushing new software. It took us a while to create a system like this. You could learn from it, but stealing is extremely forbidden and it's actually a crime, not to mention you risk being banned from the Envato Marketplaces.

Thanks so much

~ Kevin Groenendaal */

$(document).ready(function() {
	var cloneTemp = $('#NSTemplate').html();
	$('#plainModules').html(cloneTemp); 
    var templateName = $('#NSTemplate title').attr('name');
    var templateText = $('#NSTemplate title').text();
    if (window.top.location.href.toLowerCase().indexOf("dy.n") != -1) {
        
        $('#intro span:first-child, .col span, .tempName').text(templateName);
		$('#intro font').text(templateText);

        
    }
    
    else {
        
        $('.col span').text(templateName);
        $('#intro span:first-child').html('Jump start ');

		$('#intro font').text('your music career with our effective and affordable Soundcloud services.');

        
    }
    
    $("#NSTemplate table[name]").each(function() {
        $(this).first('td').prepend('<div class="options" style="opacity: 1!important"><div class="hider">Hide</div><div class="duplicate">Duplicate</div></div>');
    });
    var cl = $('#NSTemplate > table').find('.bgColorResult:first-child').css('background-color');
    $('#sampleHex').css('color', cl);
    $('#NSTemplate').fadeIn();
    
    $('#NSTemplate').live('click', function(ev) {
        ev.preventDefault();
    });
    if (window.top.location.href.toLowerCase().indexOf("dy.n") != -1) {} else if (window.top.location.href.toLowerCase().indexOf("dy.n") != -1) {   $('.col').remove();
        $('.buyTemplate').remove();
        $('#intro h2').append('&nbsp;<span style="font-size: 14px;">|&nbsp; &nbsp;</span> <input type="text" value="Temporary Code" id="activateCode"><input type="button" id="activate" value="Activate">');
        $('.generate').text('Download')
        $('input[type="text"]').each(function() {
            var val = $(this).attr('value');
            if (val != '') {
                $(this).focus(function() {
                    var newVal = $(this).val();
                    if (newVal == val) $(this).val('');
                });
                $(this).blur(function() {
                    var newVal = $(this).val();
                    if (newVal == '') {
                        $(this).val(val);
                    }
                    connection()
                });
            }
        });
    }
    $('#window').mouseenter(function() {
        $('#templateOverlay').fadeIn(250);
    }).mouseleave(function() {
        $('#templateOverlay').fadeOut(250);
    });
    $('#templateOverlay').live('click', function() {
		window.scrollTo(0, 0);
        $(this).fadeOut(250);
        setTimeout(function() {
            $('#NSTemplate').css('position', 'absolute').css('z-index', '8');;
            $('#editor').fadeIn(200);
            $('#templateOverlay').css('z-index', '1').css('width', '0px').css('height', '0px').css('display', 'none');
            $('body').css('overflow', 'hidden');
            var curRes = $(window).height() - 90;
            $('#NSTemplate').animate({
                top: -250,
                height: curRes,
                borderRadius: 3
            }, 400);
            $('#NSTemplate').animate({
                marginLeft: -100
            }, 400);
        }, 400);
        setTimeout(function() {
            $('#colorPicker').fadeIn(450);
            $('.close').fadeIn();
        }, 1400);
        $('#more').fadeOut();
        setTimeout(function() {
            $('#intro h2').fadeIn();
        }, 2000);
    });
    $('#Template').live('click', function() {
    
    
    if ($(this).text().indexOf('Preview Template') >= 0) {
    
    
        window.scrollTo(0, 0);
        $('#templateOverlay').fadeOut();
        $('#NSTemplate').css('position', 'absolute').css('z-index', '8');
        $('#editor').fadeIn(200);
        $('#templateOverlay').css('z-index', '1').css('width', '0px').css('height', '0px').css('display', 'none');
        $('body').css('overflow', 'hidden');
        var curRes = $(window).height() - 90;
        $('#NSTemplate').animate({
            top: -250,
            height: curRes,
            borderRadius: 3
        }, 500);
        $('#NSTemplate').animate({
            marginLeft: -100
        }, 500);
        setTimeout(function() {
            $('#colorPicker').fadeIn();
        }, 1000);
        $('#more').fadeOut();
        setTimeout(function() {
            $('#intro h2').fadeIn();
        }, 2000);
        
        }
        
        else {
	        
	       var tf = $('.buyTemplate').attr('href');
	        
	        window.open(tf,'_blank');	        
        }
    });
    $('.hider').live('mousedown', function() {
        var curTable = $(this).parent().parent('table[name]');
        $(curTable).remove();
    });
    $('.duplicate').live('mousedown', function() {
        $(this).parent().hide();
        var curTableC = $(this).parent().parent('table[name]');
        var curTableCopy = $(this).parent().parent('table[name]').clone();
        $(curTableC).after(curTableCopy);
        setTimeout(function() {
            $('#picker').farbtastic('.colorResult');
        }, 1000);
    });
    $('#NSTemplate table[name]').live('mouseover', function() {
        var h = $(this).height() / 2 - 35;
        $(this).find('.options').css('top', h + 'px').show();
    }).live('mouseleave', function() {
        $('.options').hide()
    });
    $('.generate').click(function() {
        if ($(this).text().indexOf('Get Structure') >= -0) {
        
        if ($('#select_list').css('display') == 'block') {
			$('#select_list').slideUp();
			$('#editor').fadeOut();
			$('body').css('overflow','');
		}

		else {
            $('#select_list').slideUp(400);
            $('#colorPicker').fadeOut();
            $('.toolTip').fadeOut();
            $('body').css('overflow', '');
            setTimeout(function() {
                $('#editor').fadeOut();
                $('#NSTemplate').animate({
                    top: 49,
                    height: 361,
                    marginLeft: 0,
                    borderRadius: 3
                }, 700, 'easeOutCubic');
            }, 500);
            setTimeout(function() {
                $('#templateOverlay').css('z-index', '9').css('width', '804px').css('height', '212px').css('display', 'none').css('opacity', '1');
            }, 1000);
            setTimeout(function() {
                $('#select_box').css('z-index', '');
            }, 600);
            $('#wtg').html('Way to go! <span id="tempCode"></span> is your template\'s temporary code.<br/><br/><a id="previewTemplate" class="btn">Buy on Themeforest</a> <a id="moreBtn">Temporary code?</a>')
            $('#NSTemplate table[name]').each(function() {
                curname = $(this).attr('name');
                $('#tempCode').append('<span class="g">' + curname + '</span>');
                $('#generatedCode').animate({
                    marginLeft: 0,
                    opacity: 1
                }, 1000);
            });
            var hexColor = $('#sampleHex').css('color');
            setTimeout(function() {
                $('.g').each(function() {
                    var curG = $(this).text();
                    var generateG = $('#NSTemplate').find('table[name="' + curG + '"]').clone();
                });
                if (hexColor === undefined) {} else {
                    $('#tempCode').append('<span class="rgb">:' + hexColor + '</span>');
                }
                var tempStyles = $('#window style').text();
                $('#result .hider').remove();
            }, 100);
            setTimeout(function() {
                var generatedT = $('#result').html();
                $('#resultConvert').val(generatedT);
            }, 1000);
        }} else {
            $('#header').append('<span id="tempCode" style="display: none"></span>');
            $('#NSTemplate table[name]').each(function() {
                curname = $(this).attr('name');
                $('#tempCode').append('<span class="g">' + curname + '</span>');
            });
            var hexColor = $('#sampleHex').css('color');
            setTimeout(function() {
                if (hexColor === undefined) {} else {
                    $('#tempCode').append('<span class="rgb">:' + hexColor + '</span>');
                }
                var tempStyles = $('#window style').text();
                $('#result .hider').remove();
            }, 100);
            setTimeout(function() {
                var curCC = $('#tempCode').text();
                $('#activateCode').val(curCC);
                $('.close').trigger('click');
            }, 200);
            setTimeout(function() {
                $('#activate').trigger('click');
            }, 100);

        }
    });
    $(".close_2").click(function() {
    $('#compatible').fadeOut();
    });
    $("#editor, .close").click(function(e) {
     $('#select_list').slideUp(400);
            $('#colorPicker').fadeOut();
            $('.toolTip').fadeOut();
            $('body').css('overflow', '');
            setTimeout(function() {
                $('#editor').fadeOut();
                $('#NSTemplate').animate({
                    top: 49,
                    height: 361,
                    marginLeft: 0,
                    borderRadius: 3
                }, 700, 'easeOutCubic');
            }, 500);
     setTimeout(function() {
                $('#templateOverlay').css('z-index', '9').css('width', '804px').css('height', '212px').css('display', 'none').css('opacity', '1');
            }, 1000);
        
    });
    $(".backBtn").click(function(){$("#more").fadeOut();setTimeout(function(){$("#intro h2").fadeIn()},500)});
    $('#select_box').click(function() {
    
    if ($('#select_box:contains("StampReady Profile")').length > 0) {
	    
	    $(location).attr('href','http://www.themeforest.net/user/StampReadyTemplates');
    }
    
    else {
        $('#select_list li').remove();
        $('#select_list').slideDown(400).css('z-index', '6');
        $('#select_box').css('z-index', '6')
        $('#editor').fadeIn().css('z-index', '6');
        $('body').css('overflow', 'hidden');
        $('#NSTemplate').css('z-index', '1')
        $.ajax({
            type: "GET",
            url: "src/products.xml",
            dataType: "xml",
            success: function(xml) {
                $(xml).find('icon').each(function() {
                    var path = $(this).find('src').text();
                    var name = $(this).find('name').text();
                    var link = $(this).find('link').text();
                    $('<li><a href="'+link+'"><img src="' + name + '"></a><p style="display: none">' + path + '</p></li>').appendTo('#select_list');
                });
            }
        });
        }
    });
    $('#select_list li').live('mouseenter', function() {
        var listSrc = $(this).find('p').text();
        $('.toolTip').fadeIn();
        $('.toolTip img').attr('src', listSrc);
    }).live('mouseleave', function() {
        $('.toolTip').hide();
    });
    $('#select_list').live('mouseleave', function() {
    	$('.toolTip').hide();
    })
    $('#moreBtn').live('click', function() {
        $('#intro h2').fadeOut();
        setTimeout(function() {
            $('#more').fadeIn();
        }, 600);
    });
    $('#activate').live('click', function() {
        $('#compatible').fadeIn();
    });
    $('.mailchimpC').click(function() {
        var n = $('#activateCode').val().split(':').pop()
        var b = $('#activateCode').val().split(':')[0]

        $('#c').val(b);
        $('#generatedTemplate').empty();
        var v = $('#c').val();
        $('#chars').text(v);
        $("#chars").children().andSelf().contents().each(function() {
            if (this.nodeType == 3) {
                var $this = $(this);
                $this.replaceWith($this.text().replace(/(\w)/g, "<span>$&</span>"));
            }
            $('#chars span').each(function() {
                var curChar = $(this).text();
                var generatedTemplate = $('#mailchimpModules').find('table[name="' + curChar + '"]').clone();
                $('#generatedTemplate').append(generatedTemplate);
            });
            $('#generatedTemplate .colorResult').css('color', n);
            $('#generatedTemplate .bgColorResult').css('background-color', n);
            $('#generatedTemplate #sortable').unwrap();
            var firstTdColor = $('#NSTemplate td:first-child').css('background-color');
            var styles = $('#mailchimpModules').find('style').text();
            $('#generatedTemplate > table').wrap('<table style="background-color: ' + firstTdColor + '" width="100%" border="0" cellpadding="0" cellspacing="0" align="center"><tr><td style="background-color: ' + firstTdColor + '" width="100%" valign="top"><tr></td></td></tr></table>');
            $('#generatedTemplate .options').remove();
            $('#generatedTemplate').prepend('<style type="text/css">' + styles + '</style>');
            var newTemp = $('#generatedTemplate').html();
            $('#NSTemplate').html(newTemp);
            $('#htmldump').val(newTemp)
        });
        generate();
        $('#compatible').fadeOut();
        $('#intro span:first-child').html('The structure has been downloaded.<br/>');
    });
    $('.campaignMonitorC').click(function() {
        var n = $('#activateCode').val().split(':').pop()
        var b = $('#activateCode').val().split(':')[0]

        $('#c').val(b);
        $('#generatedTemplate').empty();
        var v = $('#c').val();
        $('#chars').text(v);
        $("#chars").children().andSelf().contents().each(function() {
            if (this.nodeType == 3) {
                var $this = $(this);
                $this.replaceWith($this.text().replace(/(\w)/g, "<span>$&</span>"));
            }
            $('#chars span').each(function() {
                var curChar = $(this).text();
                var generatedTemplate = $('#campaignMonitorModules').find('table[name="' + curChar + '"]').clone();
                $('#generatedTemplate').append(generatedTemplate);
            });
            $('#generatedTemplate .colorResult').css('color', n);
            $('#generatedTemplate .bgColorResult').css('background-color', n);
            $('#generatedTemplate #sortable').unwrap();
            var firstTdColor = $('#NSTemplate td:first-child').css('background-color');
            var styles = $('#campaignMonitorModules').find('style').text();
            $('#generatedTemplate > table').wrap('<table style="background-color: ' + firstTdColor + '" width="100%" border="0" cellpadding="0" cellspacing="0" align="center"><tr><td style="background-color: ' + firstTdColor + '" width="100%" valign="top"><tr></td></td></tr></table>');
            $('#generatedTemplate .options').remove();
            $('#generatedTemplate').prepend('<style type="text/css">' + styles + '</style>');
            var newTemp = $('#generatedTemplate').html();
            $('#NSTemplate').html(newTemp);
            $('#htmldump').val(newTemp)
        });
		generate();
        $('#compatible').fadeOut();
        $('#intro span:first-child').html('The structure has been downloaded.<br/>');
    });
    $('.noneC').click(function() {
        var n = $('#activateCode').val().split(':').pop()
        var b = $('#activateCode').val().split(':')[0]

        $('#c').val(b);
        $('#generatedTemplate').empty();
        var v = $('#c').val();
        $('#chars').text(v);
        $("#chars").children().andSelf().contents().each(function() {
            if (this.nodeType == 3) {
                var $this = $(this);
                $this.replaceWith($this.text().replace(/(\w)/g, "<span>$&</span>"));
            }
            $('#chars span').each(function() {
                var curChar = $(this).text();
                var generatedTemplate = $('#plainModules').find('table[name="' + curChar + '"]').clone();
                $('#generatedTemplate').append(generatedTemplate);
            });
            $('#generatedTemplate .colorResult').css('color', n);
            $('#generatedTemplate .bgColorResult').css('background-color', n);
            $('#generatedTemplate #sortable').unwrap();
            var firstTdColor = $('#NSTemplate td:first-child').css('background-color');
            var styles = $('#plainModules').find('style').text();
            $('#generatedTemplate > table').wrap('<table style="background-color: ' + firstTdColor + '" width="100%" border="0" cellpadding="0" cellspacing="0" align="center"><tr><td style="background-color: ' + firstTdColor + '" width="100%" valign="top"><tr></td></td></tr></table>');
            $('#generatedTemplate .options').remove();
            $('#generatedTemplate').prepend('<style type="text/css">' + styles + '</style>');
            var newTemp = $('#generatedTemplate').html();
            $('#NSTemplate').html(newTemp);
            $('#htmldump').val(newTemp)
        });
        
        generate();
        
        $('#compatible').fadeOut();
        $('#intro span:first-child').html('The structure has been downloaded.<br/>');
    });
    if (window.top.location.href.toLowerCase().indexOf("dy.n") != -1) {} else if (window.top.location.href.toLowerCase().indexOf("file") != -1) {} else {
        $('body').css('dsplay', 'none');
    }
});

function generate() {
	
	setTimeout(function(){
        
        	$('#generateTemplate').trigger('click');
        	$('.close').trigger('')
        
        },500);
	
}

function pop() {
    var left = (screen.width / 2) - (460 / 2);
    var top = (screen.height / 2) - (320 / 2);
    var screenWidth = $(window).width()
    var screenHeight = $(window).height()
    var w = window.open('', '', 'toolbar=yes, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width=' + screenWidth + ', height=' + screenHeight + ', top=' + top + ', left=' + left)
    var newTemp = $('#NSTemplate').html();
    $('#generatedTemplate').html(newTemp);
    $('#generatedTemplate .options').remove();
    $('#filedata').val($('#generatedTemplate').html());
    w.document.write(document.getElementById('filedata').value);
    w.document.close(); // needed for chrome and safari
}