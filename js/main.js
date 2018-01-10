/**
 * Created by Administrator on 2018/1/3 0003.
 */
'use strict';
(function (window, document) {
    $(function () {
        /*颜色列表*/
        var $lis = $('.color > ul > li');
        for (var i = 0;i< $lis.length;i++){
            var span = $lis[i].children[0].children[0];
            var $span = $(span);
            var color = $span.attr('data-color');
            $span.css({
                'backgroundColor':color,
            });
        };
        /*产品转换 each遍历*/
        $('.product').each(function (index,ele) {
            var $make3D = $(ele).find('.make3D');
            var i = 0;/*图片切换index*/
            var $carousel_container = $(ele).find('.make3D > .product-back > .carousel > .carousel-container');
            var length = $(ele).find('.make3D > .product-back > .carousel > .carousel-container').children().length;
            var width = $carousel_container.width()/3;
            $make3D.on('click','.view_gallery',function () {
                $make3D.addClass('flip-10');
                setTimeout(function () {
                    $make3D.removeClass('flip-10').addClass('flip-90');
                }, 50);
                setTimeout(function () {
                    $make3D.removeClass('flip-90').addClass('flip-190');
                    $(ele).find('.make3D > .product-back').show();
                    setTimeout(function () {
                        $make3D.removeClass('flip-190').addClass('flip-180');
                        setTimeout(function () {
                            $(ele).find('.make3D > .product-back > .carousel > .carousel-close')
                                .show();
                        },100)
                    },100)
                },150)
            }).on('click','.carousel-close',function () {/*carousel-close*/
                $make3D.removeClass('flip-180');
                $(ele).find('.make3D > .product-back').hide();
            }).on('click','.carousel-prev',function () {/*carousel-prev*/
                i--;
                if (i < 0){
                    i = 0;
                }
                console.log(i)
                console.log("prev:"+width*i)
                $carousel_container.css({
                    'left':-width*i,
                });
            }).on('click','.carousel-next',function () {/*carousel-next*/
                i ++;
                if (i >= length){
                    i = length -1 ;
                }
                console.log(i)
                console.log("next:" + width*i)
                $carousel_container.css({
                    'left': -width*i ,
                });
            })
        });
        $('.add_to_cart').click(function () {
            var productCard = $(this).parent();
            var position = productCard.offset();
            var productImage = $(productCard).find('img').get(0).src;
            var productName = $(productCard).find('.product_name').get(0).innerHTML;
            $('body').append('<section class="floating-cart"></section>');
            var cart = $('section.floating-cart');
            productCard.clone().appendTo(cart);
            $(cart).css({
                'top': position.top + 'px',
                'left': position.left + 'px'
            }).fadeIn('slow').addClass('moveToCart');
            setTimeout(function () {
                $('body').addClass('MakeFloatingCart');
            }, 800);
            setTimeout(function () {
                $('section.floating-cart').remove();
                $('body').removeClass('MakeFloatingCart');
            }, 1000);
        });

    });
})(window,document)