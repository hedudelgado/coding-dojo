describe('Challenges team 1', () => {
  // //////////////////////////////////////
  // //  KATA 1
  // //////////////////////////////////////
  it('Guess the trickyScope value', () => {
    let trickyScope = 5;
  
    function foo() {
      trickyScope = 20;
      
      return trickyScope;
    }

    foo();
      
    // answer here  
    expect(trickyScope).toBe();
  });

  // //////////////////////////////////////
  // //  KATA 2
  // //////////////////////////////////////
  it('Guess the misleadingArray properties', () => {
    const misleadingArray = [1, 2, 3, 4];

    misleadingArray[100] = 5;

    // answer here
    expect(misleadingArray.length).toBe();
    // answer here
    expect(misleadingArray[10]).toBe();
    // answer here
    expect(misleadingArray[100]).toBe();
    
    misleadingArray.length = 5;
    
    // answer here
    expect(misleadingArray.length).toBe();
    // answer here
    expect(misleadingArray[10]).toBe();
    // answer here
    expect(misleadingArray[100]).toBe();
  });

  // //////////////////////////////////////
  // //  KATA 3
  // //////////////////////////////////////
  it('WT1 is a mess!!!! needs a PO now!!!', () => {
    wt1 = {
      PO: '',
      assignPO : function(wt, po){
        // Write the code to assign a PO
      }
    }

    const po = 'shweta';
    wt1.assignPO(wt1, po);

    // answer here
    expect(wt1.PO).toEqual();
  });

  // //////////////////////////////////////
  // //  KATA 4
  // //////////////////////////////////////
  it('WT1 is a mess!!!! needs a QA now!!!', () => {
    wt1 = {
      QA: [],
      assignQA: function (wt, qa){
        // Write the code to assign
      }
    }

    const qa = '';
    wt1.assignQA(wt1, qa);

    // answer here
    expect(wt1.QA.includes()).toEqual(true);
  });

  // //////////////////////////////////////
  // //  KATA 5
  // //////////////////////////////////////
  it('There is a cheekyMember in WT1 find "cheekyMember" and kick him out!!!!', () => {
    wt1 = {
      developers: ['Nish', 'Dimitris', 'Rachelle', 'Anita', 'Chitra', 'David', 'cheekyMember'],
      manageDevelopers: function(wt, qa, action){
        // There is a cheekyMember in WT1 find him and kick him out!!!!
      }
    }

    wt1.manageDevelopers(wt1, 'cheekyMember');

    expect(wt1.developers.includes('cheekyMember')).toEqual();
  });

  // //////////////////////////////////////
  // //  KATA 6
  // //////////////////////////////////////
  it('Whitbread requested a getProject() functionality that will tell which teams is working in what', () => {

    wt2 = {
      project: 'Search Results',
    }

    wt1 = {
      project: 'Booking Flow',
    }

    // Cant modify the function
    var getProject = function(){
      return this.project;
    }

    // Use the getProject function and solve it in here!
    expect().toEqual('Booking Flow');
    expect().toEqual('search results');
  });

  //////////////////////////////////////
  //  KATA 7
  //////////////////////////////////////
  it('Write a function that identifies the only ONE even or the only ONE odd number', () => {

    // Not allowed to pass arguments
    function differentTheOnlyOneEvenOrOnlyOddNumber(){
      var diffNumber;
      // Modify the function
      
      return diffNumber;
    }

    expect(differentTheOnlyOneEvenOrOnlyOddNumber([1,2,11])).toEqual(2);
    expect(differentTheOnlyOneEvenOrOnlyOddNumber([8,3,10])).toEqual(3);
  });
});