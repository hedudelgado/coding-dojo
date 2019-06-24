describe('Challenges team 2', () => {
    // //////////////////////////////////////
    // //  KATA 1
    // //////////////////////////////////////
    it('Guess the misleadingArray properties', () => {
      let trickyScope = 5;
    
    (foo = function() {
        trickyScope = 20;
    
        return trickyScope;
      })();
  
      foo;
      
      // ANSWER HERE
      expect(trickyScope).toBe(20);
    });
  
    //////////////////////////////////////
    //  KATA 2
    //////////////////////////////////////
    it('Guess the misleadingArray properties', () => {
      const misleadingArray = [1, 2, 3, 4];
  
      expect(misleadingArray.length).toBe(4);
      misleadingArray.length = 15;
      misleadingArray[1] = 5;

      // ANSWER HERE
      expect(misleadingArray.length).toBe(15);

      // ANSWER HERE
      expect(misleadingArray[10]).toBe(undefined);
      
      // ANSWER HERE
      expect(misleadingArray[100]).toBe(undefined);
    });
  
    // // //////////////////////////////////////
    // // //  KATA 3
    // // //////////////////////////////////////
    it('Do you know hoisting is about? hoisting in function declarations', () => {
      foo = function() { return value = 1; }
      
      foo();
      
      foo = function() { return value = 2; }
  
      // Answer here
      expect(value).toEqual(1);
    });
    
    // // //////////////////////////////////////
    // // //  KATA 4
    // // //////////////////////////////////////
    it('Hoisting.. again.. but in function expressions', () => {
      function foo() { return value = 1; }
      
      foo();
      
      function foo() { return value = 2; }
  
      // Answer here
      expect(value).toEqual(2);
    });
  
    // // //////////////////////////////////////
    // // //  KATA 5
    // // //////////////////////////////////////
    it('What is wrong with object keys in JS? :O', () => {
      var key1 = new Object();
      var keyTwo = new Object();
      var map = new Object();
      
      map[key1] = "key1";
      map[keyTwo] = "keyTwo";

      // Answer here
      expect(map[key1]).toBe("keyTwo");
    });
  
    // // //////////////////////////////////////
    // // //  KATA 6
    // // //////////////////////////////////////
    it('<3 Javascript deep object deconstruction is a lovely feature <3', () => {
      let webTeam1 = {
        techy: {
          qa: 'Snorris',
          developers: ['Dimitris', 'Ivan', 'David', 'Nish', 'Anhita', 'Rachelle']
        }
      };
      // CREATE A CONST qa and extract qa from WT1
      const { techy:{qa: qa} } = webTeam1;
      // CREATE CONSTSS like dev1 dev2 and dev3 that return each of the devs
      const { techy:{ developers: [dev1, dev2, dev3, dev4, dev5, dev6] } } = webTeam1;
  
      expect(dev1).toEqual('Dimitris');
      expect(dev2).toEqual('Ivan');
      expect(dev3).toEqual('David');
      expect(dev4).toEqual('Nish');
      expect(dev5).toEqual('Anhita');
      expect(dev6).toEqual('Rachelle');
      expect(qa).toEqual('Snorris');
    });
  
    // //////////////////////////////////////
    // //  KATA 7
    // //////////////////////////////////////
    it('Write a function that identifies the TWO even or the TWO odd number and returns a new array with it', () => {
  
      // Not allowed to pass arguments
      function differentNumberIdentifier(arr){
        var diffNumbers;

        diffNumbers = arr.filter(even => even % 2 === 0);

        if(diffNumbers.length === 2){
          return diffNumbers;
        }else{
          return arr.filter(even => even % 2 === 1);
        }
        
        // ANSWER HERE  
      }
  
      expect(differentNumberIdentifier([1,2,11])).toEqual([1,11]);
      expect(differentNumberIdentifier([8,3,10])).toEqual([8,10]);
    });
  });