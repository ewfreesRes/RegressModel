heights <- read.csv("CSVData\\Galton.csv",header=TRUE)

temp <- heights
origlength <- length(heights$NUMBER)
for (j in 1:origlength){
numreps <-  heights$NUMBER[j]
temp1 <- as.matrix(rep(1,numreps)) %*%  as.matrix(heights[j,]) 
  temp <- rbind(temp,temp1)
}
GaltonReformat  <- temp[-(1:origlength),2:5]
str(temp)
str(GaltonReformat)

write.csv(GaltonReformat,"CSVData\\GaltonReformat.csv")
