#!/bin/bash

# Captura a saída do comando em uma variável
files=$(ls -alF | awk '{if ($9 != "./" && $9 != "../" && $9 != "getData.sh") print $9}')

# Transforma a saída em um array
array=($files)

# Exibe o array em uma única linha
echo -n "["
for file in "${array[@]}"; do
    echo -n "\"$file\", "
done

# Remove a última vírgula e espaço, se houver
if [ ${#array[@]} -gt 0 ]; then
    echo -n "\"${array[-1]}\"" # imprime o último elemento sem vírgula
fi

echo "]"
