quadSum = 0
quadSumResult = 0
sumQuad = 0

for i=1,100 do 
    sumQuad = sumQuad + i^2
    quadSum = quadSum + i
end

quadSumResult = quadSum^2
final = quadSumResult - sumQuad 


print (final)