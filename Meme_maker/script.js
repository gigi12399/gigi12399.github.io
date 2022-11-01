$(function() {
    $.get("https://api.imgflip.com/get_memes", function(res) {
        var images = res.data.memes;
        var randomNum = Math.floor(Math.random() * images.length);
        var memes = images[randomNum];
        console.log(memes)
        var id = memes.id;
        //console.log(id)
        var box_count = memes.box_count;
        console.log(box_count)
        var img = `<img class="img-fluid" id = "img" src = "${memes.url}" width = "400">`
        $('div#image').html(img);
        $('p#id').text(id);
    });

    $('#myform').on('submit', function(event) {
        let t0 = $('#text0').val();
        let t1 = $('#text1').val();
        let template_id = $('p#id').text();
        console.log(template_id)

        $.post(" https://api.imgflip.com/caption_image", {
            template_id: template_id,
            username: "Theingi",
            password: "gigi12319995",
            text0: t0,
            text1: t1
        }, function(res) {
            console.log(res)
            let img = `<img class="img-fluid" id = "imgmeme" src = "${res.data.url}" width = "400">`
            $('#meme').html(img)
            $('a#download').slideDown();
            let mya_href = $('a#download');
            $(mya_href).attr("href", res.data.url);
            //$(mya_href).attr("download", res.data.url);
        })
        event.preventDefault();

    })
})