
var elmToAddText = document.getElementById('scroll-text-services');
if(!elmToAddText || elmToAddText !== undefined || elmToAddText != null) {
    var typewriter = new Typewriter(elmToAddText, {
        loop: true,
        delay: 75
      });
      
      typewriter
        .typeString('Wed Design')
        .pauseFor(900)
        .deleteAll()
        .typeString('Software Solutions')
        .pauseFor(900)
         .deleteAll()
          .typeString('Contracing')
          .pauseFor(900)
          .deleteAll()
        .start();
}
