'use strict';

(function ($) {
    $(document).ready(function () {
        // Code
        var BASE_URL = 'http://localhost:3000',
            count = -1,
            $list = $('.employees');
            $list.html('');
        
        $('.button').toggle(
         function() {
                $('.button').parent().removeAttr('in').addAttr('out');
         },
         function() {
                $('.button').parent().removeAttr('out').addAttr('in');         
         }
         );

        $.ajax({
            url: `${BASE_URL}/employees`,
            method: 'get',
            cache: false,
            success: function (data) {
                $.each(data, (i) => {
                    $list.append(createItem(data[i]));
                });
            }
        });
        

        function createItem(item) {
            count++;
            return `<li class="employ ${count}" id="${item.status}">
                            <button class="button">${item.status}</button>
                            <p class="name">${item.name}</p>             
                    </li>`;
        }




    });
})(jQuery);

