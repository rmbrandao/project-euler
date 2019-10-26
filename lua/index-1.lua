natural = 0

for i=0,999 do
    if (i % 3 == 0) or (i % 5 == 0) then
        natural = natural + i
    end
end

print(natural)