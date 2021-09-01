function tipoDeTriangulo(lado1, lado2 ,lado3)
{
    if( lado1 === lado2 & lado2===lado3)
    {
        return 'Equilatero';    
    }
    if(lado1===lado2 || lado2===lado3 || lado3===lado1)
    {
        return 'Isoceles';    
    }
    if(lado1!=lado2 & lado2!=lado3)
    {
        return'Escaleno';    
    }
}
console.log(tipoDeTriangulo(1,2,2));

function areaDelTriangulo(base,altura)
{
    area=(base*altura)/2;
    return area;    
}
console.log(areaDelTriangulo(5,10));