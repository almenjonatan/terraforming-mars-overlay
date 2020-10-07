import json
import time

from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException


def main():
    driver = webdriver.Firefox()

    urls = get_urls(driver)

    cards = []

    for url in urls:
        driver.get(url)
        time.sleep(2)
        cards.append(parse_card(driver))

    with open("../data/cards.json", "w") as f:
        f.write(json.dumps({"cards": cards}))


def get_urls(driver):
    driver.get("https://terraformingmars.cards/")
    time.sleep(2)
    links = driver.find_elements_by_css_selector(".card-title a")

    return [a.get_attribute("href") for a in links]


def parse_card(driver):
    mega_credit = driver.find_element_by_class_name("mc").text
    name = driver.find_element_by_class_name("float-left").text

    card_info = driver.find_elements_by_tag_name("tr")
    card_number, card_type, card_deck = [c.text.split()[-1] for c in card_info]

    card_text = driver.find_element_by_css_selector(".col-8 > div:nth-child(1) > p:nth-child(3)").text
    card_effect = driver.find_element_by_css_selector(".col-8 > div:nth-child(1) > p:nth-child(2)").text

    try:
        tags = driver.find_elements_by_class_name("tag")
        tags = [tag.get_attribute("class").split()[-1] for tag in tags]
    except NoSuchElementException as _:
        tags = []

    return {
        "price": mega_credit,
        "name": name,
        "tags": tags,
        "number": card_number,
        "type": card_type,
        "text": card_text,
        "ae": card_effect
    }


if __name__ == '__main__':
    main()
