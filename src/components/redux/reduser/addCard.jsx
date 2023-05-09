
const card =  [];


function addCard(state = card, action) {
  const product = action.payload;
  switch (action.type) {
    case "add_Card":
      const list = state.find((i) => i.url === product.url);
      if (list) {
        return state.map((x) =>
          x.url === product.url ? { ...x, count: x.count + 1,  } : x
        ) ;
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            count: 1,
          },
          
        ];
        
      }

    default:
      return state;
    
  }
}

export { addCard };
