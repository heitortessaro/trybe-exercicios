from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, numbers):
        return sum(numbers) / len(numbers)

    @classmethod
    def mediana(cls, numbers):
        numbers.sort()
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]

    @classmethod
    def moda(cls, numbers):
        number, _ = Counter(numbers).most_common()[0]
        return number


# ao decorarmos o método mediana com o decorador @classmethod o
# tornamos um método da classe MyClass e não das instâncias de MyClass.
# Isso quer dizer que podemos invocar esse método no nível da classe:

# Estatistica.mediana()
