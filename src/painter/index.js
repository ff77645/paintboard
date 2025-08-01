export default class Painter {
    ctx = null;
    paths = [];
    px = 1;
    constructor(ctx,paths){
        this.ctx = ctx
        this.paths = paths
    }
    gNum(num){

    }
    drawRect(d){
        console.log('drawRect',d)
        const {
            backgroundColor,
            top,
            left,
            width,
            height,
        } = d.style
        this.ctx.save()
        this.ctx.fillStyle = backgroundColor
        this.ctx.rect(left,top,width,height)
        this.ctx.fill()
        this.ctx.draw()
        this.ctx.restore()
    }
    draw(paths){
        paths = paths || this.paths
        for(let item of paths){
            console.log({item})
            const firstWord = item.type[0].toUpperCase()
            const methodName = 'draw' + firstWord + item.type.slice(1)
            if(methodName in this) this[methodName](item)
            if(item.children) this.draw(item.children)
        }

    }
}