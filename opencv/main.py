import cv2 as cv
import os

CWD = os.getcwd()


def main():

    img = cv.imread(CWD + "/assets/lightBamboo.jpg", cv.IMREAD_COLOR)

    if img is None:
        print("error loading image")
        return

    cv.namedWindow("original", cv.WINDOW_AUTOSIZE)

    cv.imshow("original", img)

    cv.waitKey(0)

    cv.destroyAllWindows()


if __name__ == "__main__":
    main()
