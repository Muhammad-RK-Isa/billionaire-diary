const getTenBillionairs = async () => {
    const api = `https://forbes400.onrender.com/api/forbes400?limit=10`;
    const res = await fetch(api);
    const data = await res.json();
},
    getAllBillionairs = async () => {
        const api = `https://forbes400.onrender.com/api/forbes400/getAllBillionaires`;
        const res = await fetch(api);
        const data = await res.json();
    },
    searchPerson = (data) => {
        for (const person of data) {
        };
    };