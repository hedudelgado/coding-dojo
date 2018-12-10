describe('Challenges team 3', () => {
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
  
    // //////////////////////////////////////
    // //  KATA 2
    // //////////////////////////////////////
    it('Tricky scope level 2!', () => {
      let a = 5;
      let b = 5;

      function foo() {
        var a = b = 20;
        
        return a;
      }
  
      foo();
    
      // ANSWER HERE
      expect(a).toBe();
  
      // ANSWER HERE
      expect(b).toBe();
    });
  
  
    // // //////////////////////////////////////
    // // //  KATA 3
    // // //////////////////////////////////////
    it('Sorting arrays in JS can be tricky...', () => {
      array = [6, -2, 2, -7];

      // answer here
      array.sort();
      expect(array).toBe([-7, -2, 2, 6]);
    });
  
    // // //////////////////////////////////////
    // // //  KATA 4
    // // //////////////////////////////////////
    it('Sorting arrays can be tricky I said!', () => {
      array = [6, -2, 2, -7];

      // answer here
      array.sort();
      expect(array).toBe([6, 2, -2, -7]);
    });
  
    // // //////////////////////////////////////
    // // //  KATA 5
    // // //////////////////////////////////////
    it('There are things about Js syntax we might not know, semicolons', () => {
      value = '';
      function foo() {
        return 
          value = 1;
      }
      
      foo();
  
      expect(value).toEqual();
    });
  
  
    // //////////////////////////////////////
    // //  KATA 6
    // //////////////////////////////////////
    it('This function is buggy, modify to fix it', () => {
      
      // Modify the function to match the expectations
      function calculateQuarter(num){
        if(typeof num === "NUMBER"){
          return num / 4;
        }else{
          return 'Sorry, the input is not a number, change the value and try again';
        };
      }

      
      expect(calculateQuarter('bug')).toEqual('Sorry, the input is not a number, change the value and try again');
      expect(calculateQuarter(4)).toEqual(1);
      expect(calculateQuarter(NaN)).toEqual('Sorry, the input is not a number, change the value and try again');
    });
  
    // //////////////////////////////////////
    // //  KATA 7
    // //////////////////////////////////////
    it('Write a function that identifies the only team that has a bug and kick out', () => {
      teams = [{ WTeam: 1 },{ WTeam: 2 },{WTeam: 3},{ WTeam: 'bug' }]

      // Not allowed to pass arguments
      function differentNumberIdentifier(){
        // write code here
        return teams;
      }
  
      expect(differentNumberIdentifier()).toEqual([{ WTeam: 1 },{ WTeam: 2 },{WTeam: 3}]);
    });
  });