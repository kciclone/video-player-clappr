describe('Video Player', function () {
    "use strict";
    
    var diretiva = '<player parameters="parametros"></player>';
    var componente, scope;
    var srcEsperado = 'http://ie.microsoft.com/testdrive/ieblog/2011/nov/pp4_blog_demo.mp4';
    var posterEsperado = 'http://www.imagem.com';
    var autoPlayEsperado = false;

    beforeEach(module("video"));

    beforeEach(inject(function (_$rootScope_, $compile) {
        scope = _$rootScope_.$new();

        scope.parametros = {
                            src: 'http://ie.microsoft.com/testdrive/ieblog/2011/nov/pp4_blog_demo.mp4', 
                            poster: 'http://www.imagem.com',
                            autoPlay: false
                           };
            
        componente = $compile(diretiva)(scope);
       
        scope.$digest();
            
    }));

    describe("\n << Initialize - Directive Player >> ", function () {

        it("\n- Should be send correct parameters", function () {
            var isolated = componente.isolateScope();
            expect(srcEsperado).toBe(isolated.parameters.src);
            expect(posterEsperado).toBe(isolated.parameters.poster);
            expect(autoPlayEsperado).toBe(isolated.parameters.autoPlay);
        });
    });
});
