class Productos {
    constructor() {
        this.listaDeProductos = []
    }
    
    getAll () {
        return this.listaDeProductos;
    }

    getById (id) {
        return this.listaDeProductos.find(producto => producto.id === Number(id));
    }

    addProduct (producto) {
        if (producto.id) {
            throw 'El producto ya tiene ID';
        }
        producto.id = this.maxId() + 1;
        this.listaDeProductos.push(producto);
        return producto.id;
    }

    updateProduct (id, producto) {
        const index = this.listaDeProductos.findIndex(producto => producto.id === Number(id));
        if (index < 0) return undefined;
        producto.id = Number(id);
        this.listaDeProductos.splice(index, 1, producto);
        return producto;
    }

    deleteProduct (id) {
        const index = this.listaDeProductos.findIndex(producto => producto.id === Number(id));
        if (index < 0) return undefined;
        this.listaDeProductos.splice(index, 1);
        return id;
    }

    maxId() {
        return Math.max(...this.listaDeProductos.map(o => o.id), 0);
    }
}

module.exports = Productos