describe('Testing Video Player Component', function () {

    it('Should be load component with video', function () {
        browser.get('demo/index.html');

        var video = element(by.tagName('video'));
        var srcEsperado = 'http://ie.microsoft.com/testdrive/ieblog/2011/nov/pp4_blog_demo.mp4';
        expect(srcEsperado).toContain(video.getAttribute('src'));
        
    });
    
});
