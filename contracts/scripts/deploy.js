const hre = require("hardhat");

async function main() {
  const SudokuVerifier = await hre.ethers.getContractFactory("SudokuVerifier");
  const sudokuVerifier = await SudokuVerifier.deploy();
  await sudokuVerifier.deployed();
  console.log("SudokuVerifier Contract deployed to:", sudokuVerifier.address);

  const Sudoku = await hre.ethers.getContractFactory("Sudoku");
  const sudoku = await Sudoku.deploy(sudokuVerifier.address);
  await sudoku.deployed();
  console.log("Sudoku Contract deployed to:", sudoku.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
