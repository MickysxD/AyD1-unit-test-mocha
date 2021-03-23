const assert = require('chai').assert;
const app = require('../201700543');

// Results
promedio = app.promedio(10, 5, 25);
posicion = app.posicion(5);
tamanioArray = app.tamanioArray([1,2,3,4,5,6,7,8,9]);
soy = app.soy('miguel');
factorial = app.factorial(5);

describe('201700543', function(){
  describe('promedio()', function(){
    it('promedio should return number', function(){
      assert.typeOf(promedio, 'number');
    });

    it('promedio should above 0', function(){
      assert.isAbove(promedio, 0);
    });
  });

  describe('posicion()', function(){
    it('posicion 5 should return string', function(){
      assert.typeOf(posicion, 'string');
    });

    it('posicion 5 should equal f', function(){
      assert.equal(posicion, 'f');
    });
  });

  describe('tamanioArray()', function(){
    it('tamanioArray should return number', function(){
      assert.typeOf(tamanioArray, 'number');
    });

    it('tamanioArray should equal 9', function(){
      assert.equal(tamanioArray, 9);
    });
  });

  describe('soy()', function(){
    it('soy should return string', function(){
      assert.typeOf(soy, 'string');
    });

    it('soy should equal "mi nombre es:miguel"', function(){
      assert.equal(soy, "mi nombre es:miguel");
    });
  });

  describe('factorial()', function(){
    it('factorial should return number', function(){
      assert.typeOf(factorial, 'number');
    });

    it('factorial should equal 120', function(){
      assert.equal(factorial, 120);
    });
  });

});