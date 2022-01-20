#include <iostream>
#include <opencv2/highgui/highgui.hpp>
#include <opencv2/opencv.hpp>

using namespace std;
using namespace cv;

int main(int argc, char *argv[])
{
    Mat img;

    img = imread("../assets/lightBamboo.jpg");

    if (!img.data)
    {
        cout << "error loading image" << endl;
        return 1;
    }

    namedWindow("original", WINDOW_AUTOSIZE);

    imshow("original", img);

    waitKey(0);

    destroyAllWindows();

    return 0;
}