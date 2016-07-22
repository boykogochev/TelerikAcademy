function solve(){

  return function (element, contents){

      var fragment = document.createDocumentFragment(),
          newDiv,
          content;

      if (typeof(element) === 'string') {
        if (element) {
          element = document.getElementById(element);
        }
        else {
          throw new Error();
        }
      }

      else if(!(element instanceof HTMLElement)) {
        throw new Error();
      }

      for (var i = 0; i < contents.length; i+=1) {
        content = contents[i];
        newDiv = document.createElement('div');

        if (typeof (content) !== 'string' && typeof (content) !== 'number') {
          throw new Error();
        }

        newDiv.innerHTML = content;
        fragment.appendChild(div);
      }


      element.innerHTML = '';
      element.appendChild(fragment);

  }



}
