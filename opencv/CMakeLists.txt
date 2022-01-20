cmake_minimum_required(VERSION "3.17")

project(PROJECT_NAME)

set(OpenCV_DIR /Users/victormu98/opencv/install/lib/cmake/opencv4)

set(CMAKE_CXX_STANDARD 14)

find_package( OpenCV REQUIRED )

include_directories( ${OpenCV_INCLUDE_DIRS} )

add_executable(PROJECT_NAME main.cpp)

target_link_libraries(PROJECT_NAME ${OpenCV_LIBS} )