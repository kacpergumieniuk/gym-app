-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "trainingId" TEXT NOT NULL,
    "exerciseName" TEXT NOT NULL,
    "weight" REAL NOT NULL,
    "seriesCount" REAL NOT NULL,
    "repsCount" REAL NOT NULL,
    "volume" REAL NOT NULL
);
