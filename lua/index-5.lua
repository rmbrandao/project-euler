small = 1
para = false

while not para do
    if (small % 1) == 0 and (small % 2) == 0 and (small % 3) == 0 and (small % 4) == 0 and (small % 5) == 0
    and (small % 6) == 0 and (small % 7) == 0 and (small % 8) == 0 and (small % 9) == 0 and (small % 10) == 0
    and (small % 11) == 0 and (small % 12) == 0 and (small % 13) == 0 and (small % 14) == 0 and (small % 15) == 0
    and (small % 16) == 0 and (small % 17) == 0 and (small % 18) == 0 and (small % 19) == 0 and (small % 20) == 0 then
        para = true
        break;
    end
    small = small + 1
end

print(small)