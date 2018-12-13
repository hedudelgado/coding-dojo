describe('Challenges team', () => {
    // //////////////////////////////////////
    // //  KATA 1
    // //////////////////////////////////////
    it('Tricky scope!', () => {
      let a = 5;
      let b = 5;

      function foo() {
        var a, b = 20;
      }
  
      foo();
    
      // ANSWER HERE
      expect(a).toBe();
  
      // ANSWER HERE
      expect(b).toBe();
    });
  });