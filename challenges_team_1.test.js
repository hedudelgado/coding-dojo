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
    expect(trickyScope).toBe(20);
  });

  // //////////////////////////////////////
  // //  KATA 2
  // //////////////////////////////////////
  it('Guess the misleadingArray properties', () => {
    const misleadingArray = [1, 2, 3, 4];

    misleadingArray[100] = 5;

    // answer here
    expect(misleadingArray.length).toBe(101);
    // answer here
    expect(misleadingArray[10]).toBe(undefined);
    // answer here
    expect(misleadingArray[100]).toBe(5);
    
    misleadingArray.length = 5;
    
    // answer here
    expect(misleadingArray.length).toBe(5);
    // answer here
    expect(misleadingArray[10]).toBe(undefined);
    // answer here
    expect(misleadingArray[100]).toBe(undefined);
  });

  // //////////////////////////////////////
  // //  KATA 3
  // //////////////////////////////////////
  it('WT1 is a mess!!!! needs a PO now!!!', () => {
    wt1 = {
      PO: '',
      assignPO : function(po){
        // Write the code to assign a PO
        this.PO = po;
      }
    }

    const po = 'shweta';
    wt1.assignPO(po);

    // answer here
    expect(wt1.PO).toEqual(po);
  });

  // //////////////////////////////////////
  // //  KATA 4
  // //////////////////////////////////////
  it('WT1 is a mess!!!! needs a QA now!!!', () => {
    wt1 = {
      QA: [],
      assignQA: function (qa){
        // Write the code to assign
        this.QA.push(qa);
      }
    }

    const qa = 'a qa';
    wt1.assignQA(qa);

    // answer here
    expect(wt1.QA.includes(qa)).toEqual(true);
  });

  // //////////////////////////////////////
  // //  KATA 5
  // //////////////////////////////////////
  it('There is a cheekyMember in WT1 find "cheekyMember" and kick him out!!!!', () => {
    wt1 = {
      developers: ['Nish', 'Dimitris', 'Rachelle', 'Anita', 'Chitra', 'David', 'cheekyMember'],
      manageDevelopers: function(wt, qa, action){
        // There is a cheekyMember in WT1 find him and kick him out!!!!
        action === 'kick out' ? this.developers.splice(this.developers.indexOf(qa),this.developers.indexOf(qa) +1) : this.developers.push(qa);
      }
    }

    wt1.manageDevelopers(wt1, 'cheekyMember', 'kick out');

    expect(wt1.developers.includes('cheekyMember')).toEqual(false);
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
    expect(getProject.bind(wt1)()).toEqual('Booking Flow');
    expect(getProject.bind(wt2)()).toEqual('Search Results');
  });

  //////////////////////////////////////
  //  KATA 7
  //////////////////////////////////////
  it('Write a function that identifies the only even or the only odd number', () => {

    // Not allowed to pass arguments
    function differentNumberIdentifier(numbers){
      var diffNumber;
      // Modify the function
      diffNumber = numbers.filter( n => n % 2 === 1);
      if(diffNumber.length > 1){
        return numbers.filter( n => n % 2 == 0)[0];
      }else{
        return diffNumber[0];
      }
      
    }

    expect(differentNumberIdentifier([1,2,11])).toEqual(2);
    expect(differentNumberIdentifier([8,3,10])).toEqual(3);
  });
});