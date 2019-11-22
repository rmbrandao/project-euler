main = do
    print $ sum . takeWhile (<1000) $ filter (\x -> (x `mod` 3 == 0 || x `mod` 5 == 0)) [1..]