---
title: Workflow Run Crate
---


# Workflow Run Crate

* Version: 0.1
* Permalink: <https://w3id.org/ro/profiles/software/source-code/0.1>
* Authors: Language Data Commons of Australia (LDaCA) RO-Crate working group

This profile uses terminology from the [RO-Crate 1.1 specification](https://w3id.org/ro/crate/1.1).


## Overview

This profile 

## Example Metadata File (`ro-crate-metadata.json`) - REPLACE WITH BETTER (SHORTER) EXAMPLE

```json
{
  "@context": [
    "https://w3id.org/ro/crate/1.1/context",
    {
      "@vocab": "http://schema.org/"
    }
  ],
  "@graph": [
    {
      "@id": "./",
      "@type": [
        "Dataset",
        "SoftwareSourceCode",
        "SoftwareApplication"
      ],
      "hasPart": [
        {
          "@id": "docker/Dockerfile_0.1.0_gdal3.7.0_mcpy3.10_ubuntu22.04_full"
        },
        {
          "@id": "docker/Dockerfile_0.1.0_gdal3.6.4_py3.10_alpine3.16_normal"
        },
        {
          "@id": "docker/Dockerfile_0.1.0_gdal3.7.0_py3.10_ubuntu22.04.2_full"
        },
        {
          "@id": "docker/Dockerfile_0.1.0_gdal3.5.3_py3.9_alpine3.15_normal"
        },
        {
          "@id": "docker/Dockerfile_0.1.0_gdal3.7.0_py3.10_alpine3.16_normal"
        },
        {
          "@id": "LICENSE"
        },
        {
          "@id": "README.md"
        },
        {
          "@id": "examples/get_netcdf_util_demo.py"
        },
        {
          "@id": "examples/5_aem_test.ipynb"
        },
        {
          "@id": "examples/5a_aem_test-EFTF.ipynb"
        },
        {
          "@id": "examples/gravity_point_metadata.csv"
        },
        {
          "@id": "examples/nearest_geophys_point_finder.py"
        },
        {
          "@id": "examples/geophys_point_fetcher.py"
        },
        {
          "@id": "examples/plot_point_dataset.py"
        },
        {
          "@id": "examples/CSW Request.xml"
        },
        {
          "@id": "examples/geophysics_line_nc_metadata.csv"
        },
        {
          "@id": "examples/2_geophys_netcdf_grid_utils_demo.ipynb"
        },
        {
          "@id": "examples/point_gravity_access.ipynb"
        },
        {
          "@id": "examples/10_gravity_point_discovery_and_access_demo.ipynb"
        },
        {
          "@id": "examples/CSW Response.xml"
        },
        {
          "@id": "examples/aem_netcdf_test.ipynb"
        },
        {
          "@id": "examples/new_9_gravity_point_dataset.ipynb"
        },
        {
          "@id": "examples/1_CSW_data_discovery.ipynb"
        },
        {
          "@id": "examples/4_geophys_data_fusion_demo.ipynb"
        },
        {
          "@id": "examples/7_aem_test_3d_voxel_netCDF_output.ipynb"
        },
        {
          "@id": "examples/8_line_dataset_discovery_and_use_demo.ipynb"
        },
        {
          "@id": "examples/6_aem_test_multiline.ipynb"
        },
        {
          "@id": "examples/9_gravity_point_dataset.ipynb"
        },
        {
          "@id": "examples/get_nearest_points_demo.ipynb"
        },
        {
          "@id": "examples/dynamic_kmls/app.py"
        },
        {
          "@id": "examples/tile_gridder.py"
        },
        {
          "@id": "examples/7_aem_test_3d_voxel.ipynb"
        },
        {
          "@id": "examples/3_geophys_netcdf_line_utils_demo.ipynb"
        },
        {
          "@id": "examples/NCSS_Demo.ipynb"
        },
        {
          "@id": "examples/9b_line_dataset_plot_line_elevations.ipynb"
        },
        {
          "@id": "examples/9a_line_dataset_plot.ipynb"
        },
        {
          "@id": "examples/netcdf_grid_utils_shape_test.ipynb"
        },
        {
          "@id": "examples/line_data_demo.py"
        },
        {
          "@id": "examples/fetch_points_demo.ipynb"
        },
        {
          "@id": "examples/dynamic_point_gridding_utils.py"
        },
        {
          "@id": "pyproject.toml"
        },
        {
          "@id": "environment.yml"
        },
        {
          "@id": "resources.yml"
        },
        {
          "@id": "CITATION.cff"
        },
        {
          "@id": "Dockerfile"
        },
        {
          "@id": "setup.py"
        },
        {
          "@id": "bin/nc2aseg"
        },
        {
          "@id": "bin/csw_find.bat"
        },
        {
          "@id": "bin/csw_find"
        },
        {
          "@id": "bin/rechunk.bat"
        },
        {
          "@id": "bin/aseg2nc.bat"
        },
        {
          "@id": "bin/aseg2nc"
        },
        {
          "@id": "bin/rechunk"
        },
        {
          "@id": "bin/nc2aseg.bat"
        },
        {
          "@id": "build_all_images.sh"
        },
        {
          "@id": "geophys_utils/nc2aseg.py"
        },
        {
          "@id": "geophys_utils/csw_find.py"
        },
        {
          "@id": "geophys_utils/_netcdf_line_utils.py"
        },
        {
          "@id": "geophys_utils/_data_stats.py"
        },
        {
          "@id": "geophys_utils/_array_pieces.py"
        },
        {
          "@id": "geophys_utils/_vincenty.py"
        },
        {
          "@id": "geophys_utils/_get_netcdf_util.py"
        },
        {
          "@id": "geophys_utils/_dem_utils.py"
        },
        {
          "@id": "geophys_utils/_concave_hull.py"
        },
        {
          "@id": "geophys_utils/_array2file.py"
        },
        {
          "@id": "geophys_utils/_netcdf_grid_utils.py"
        },
        {
          "@id": "geophys_utils/rechunk.py"
        },
        {
          "@id": "geophys_utils/_datetime_utils.py"
        },
        {
          "@id": "geophys_utils/_crs_utils.py"
        },
        {
          "@id": "geophys_utils/dataset_metadata_cache/data/dataset_metadata_cache.sqlite"
        },
        {
          "@id": "geophys_utils/dataset_metadata_cache/_dataset_metadata_cache.py"
        },
        {
          "@id": "geophys_utils/dataset_metadata_cache/_sqlite_dataset_metadata_cache.py"
        },
        {
          "@id": "geophys_utils/dataset_metadata_cache/_postgres_dataset_metadata_cache.py"
        },
        {
          "@id": "geophys_utils/dataset_metadata_cache/dataset_metadata_cache_settings.yml"
        },
        {
          "@id": "geophys_utils/dataset_metadata_cache/csw2dataset_metadata_cache.py"
        },
        {
          "@id": "geophys_utils/dataset_metadata_cache/sqlite_dataset_metadata_cache_ddl.sql"
        },
        {
          "@id": "geophys_utils/dataset_metadata_cache/netcdf2dataset_metadata_cache.py"
        },
        {
          "@id": "geophys_utils/dataset_metadata_cache/__init__.py"
        },
        {
          "@id": "geophys_utils/dataset_metadata_cache/postgres_dataset_metadata_cache_ddl.sql"
        },
        {
          "@id": "geophys_utils/dataset_metadata_cache/dataset_search_demo.py"
        },
        {
          "@id": "geophys_utils/_csw_utils.py"
        },
        {
          "@id": "geophys_utils/_netcdf_point_utils.py"
        },
        {
          "@id": "geophys_utils/test/__main__.py"
        },
        {
          "@id": "geophys_utils/test/test_array_pieces.py"
        },
        {
          "@id": "geophys_utils/test/test_grid.nc"
        },
        {
          "@id": "geophys_utils/test/test_crs_utils.py"
        },
        {
          "@id": "geophys_utils/test/test_data_stats.py"
        },
        {
          "@id": "geophys_utils/test/test_netcdf_grid_utils.py"
        },
        {
          "@id": "geophys_utils/test/test_netcdf_point_utils.py"
        },
        {
          "@id": "geophys_utils/test/test_netcdf_line_utils.py"
        },
        {
          "@id": "geophys_utils/test/__init__.py"
        },
        {
          "@id": "geophys_utils/_polygon_utils.py"
        },
        {
          "@id": "geophys_utils/_blrb.py"
        },
        {
          "@id": "geophys_utils/csw_utils_settings.yml"
        },
        {
          "@id": "geophys_utils/netcdf_converter/grav2netcdf_converter_settings_ga_metadata"
        },
        {
          "@id": "geophys_utils/netcdf_converter/test_netcdf_converter.py"
        },
        {
          "@id": "geophys_utils/netcdf_converter/_to_netcdf_converter.py"
        },
        {
          "@id": "geophys_utils/netcdf_converter/csv2netcdf_converter.py"
        },
        {
          "@id": "geophys_utils/netcdf_converter/grav2netcdf_converter_settings.yml"
        },
        {
          "@id": "geophys_utils/netcdf_converter/grav2netcdf_converter.py"
        },
        {
          "@id": "geophys_utils/netcdf_converter/aseg_gdf_utils.py"
        },
        {
          "@id": "geophys_utils/netcdf_converter/aseg_gdf_settings.yml"
        },
        {
          "@id": "geophys_utils/netcdf_converter/grav2netcdf_converter_sql_strings.yml"
        },
        {
          "@id": "geophys_utils/netcdf_converter/aseg_gdf2netcdf_converter.py"
        },
        {
          "@id": "geophys_utils/netcdf_converter/__init__.py"
        },
        {
          "@id": "geophys_utils/netcdf_converter/netcdf2aseg_gdf_converter.py"
        },
        {
          "@id": "geophys_utils/_transect_utils.py"
        },
        {
          "@id": "geophys_utils/_netcdf_utils.py"
        },
        {
          "@id": "geophys_utils/__init__.py"
        },
        {
          "@id": "geophys_utils/_gdal_grid_utils.py"
        },
        {
          "@id": "requirements.txt"
        }
      ],
      "softwareRequirements": {
        "@id": "environment.yml"
      },
      "softwareVersion": "0.1.0",
      "softwareHelp": {
        "@id": "README.md"
      },
      "releaseNotes": {
        "@id": "README.md"
      },
      "downloadUrl": "https://github.com/alex-ip/geophys_utils/archive/refs/heads/master.zip",
      "codeRepository": "https://github.com/alex-ip/geophys_utils",
      "identifier": "https://github.com/alex-ip/geophys_utils",
      "license": {
        "@id": "LICENSE"
      },
      "usageInfo": [],
      "description": "A collection of Python utilities for discovering, accessing and using geophysics data via web services or from netCDF files.\nForked from https://github.com/GeoscienceAustralia/geophys_utils",
      "datePublished": "2017-01",
      "creator": {
        "@id": "https://orcid.org/0000-0001-8937-8904"
      },
      "funder": {
        "@id": "https://ror.org/04ge02x20"
      },
      "publisher": {
        "@id": "https://ror.org/04ge02x20"
      },
      "citation": {
        "@id": "CITATION.cff"
      },
      "programmingLanguage": {
        "@id": "https://www.python.org/"
      },
      "availableOnDevice": {
        "@id": "resources.yml"
      },
      "conformsTo": {
        "@id": "https://purl.archive.org/language-data-commons/profile#Software"
      }
    },
    {
      "@id": "docker/Dockerfile_0.1.0_gdal3.7.0_mcpy3.10_ubuntu22.04_full",
      "@type": "File",
      "description": "Dockerfile to create an image for geophys_utils 0.1.0 with GDAL 3.7.0 under MiniConda Python 3.10 in Ubuntu Linux 22.04"
    },
    {
      "@id": "docker/Dockerfile_0.1.0_gdal3.6.4_py3.10_alpine3.16_normal",
      "@type": "File",
      "description": "Dockerfile to create an image for geophys_utils 0.1.0 with GDAL 3.6.4 under  Python 3.10 in Alpine Linux 3.16"
    },
    {
      "@id": "docker/Dockerfile_0.1.0_gdal3.7.0_py3.10_ubuntu22.04.2_full",
      "@type": "File",
      "description": "Dockerfile to create an image for geophys_utils 0.1.0 with GDAL 3.7.0 under Python 3.10 in Ubuntu Linux 22.04"
    },
    {
      "@id": "docker/Dockerfile_0.1.0_gdal3.5.3_py3.9_alpine3.15_normal",
      "@type": "File",
      "description": "Dockerfile to create an image for geophys_utils 0.1.0 with GDAL 3.5.3 under  Python 3.9 in Alpine Linux 3.15"
    },
    {
      "@id": "docker/Dockerfile_0.1.0_gdal3.7.0_py3.10_alpine3.16_normal",
      "@type": "File",
      "description": "Dockerfile to create an image for geophys_utils 0.1.0 with GDAL 3.7.0 under  Python 3.10 in Alpine Linux 3.16"
    },
    {
      "@id": "LICENSE",
      "@type": "File",
      "description": "Apache 2.0 License"
    },
    {
      "@id": "README.md",
      "@type": "File"
    },
    {
      "@id": "examples/get_netcdf_util_demo.py",
      "@type": "File"
    },
    {
      "@id": "examples/5_aem_test.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/5a_aem_test-EFTF.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/gravity_point_metadata.csv",
      "@type": "File"
    },
    {
      "@id": "examples/nearest_geophys_point_finder.py",
      "@type": "File"
    },
    {
      "@id": "examples/geophys_point_fetcher.py",
      "@type": "File"
    },
    {
      "@id": "examples/plot_point_dataset.py",
      "@type": "File"
    },
    {
      "@id": "examples/CSW Request.xml",
      "@type": "File"
    },
    {
      "@id": "examples/geophysics_line_nc_metadata.csv",
      "@type": "File"
    },
    {
      "@id": "examples/2_geophys_netcdf_grid_utils_demo.ipynb",
      "@type": "File",
      "description": []
    },
    {
      "@id": "examples/point_gravity_access.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/10_gravity_point_discovery_and_access_demo.ipynb",
      "@type": "File",
      "description": "Jupyter notebook demonstrating :\n1. Discovery of gravity point datasets overlapping an area of interest from the Geoscience Australia catalogue \n2. Downloading all available gravity data points in the area of interest via the NCI OPeNDAP service\n3. Constructing a basic grid from data points\n4. Generating heatmap, hillshade and combined images."
    },
    {
      "@id": "examples/CSW Response.xml",
      "@type": "File"
    },
    {
      "@id": "examples/aem_netcdf_test.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/new_9_gravity_point_dataset.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/1_CSW_data_discovery.ipynb",
      "@type": "File",
      "description": "A Jupyter notebook demonstrating Catalogue Service for the Web (CSW) Data Discovery\nFinds all national gravity grids from GA Catalogue\n"
    },
    {
      "@id": "examples/4_geophys_data_fusion_demo.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/7_aem_test_3d_voxel_netCDF_output.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/8_line_dataset_discovery_and_use_demo.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/6_aem_test_multiline.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/9_gravity_point_dataset.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/get_nearest_points_demo.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/dynamic_kmls/app.py",
      "@type": "File"
    },
    {
      "@id": "examples/tile_gridder.py",
      "@type": "File"
    },
    {
      "@id": "examples/7_aem_test_3d_voxel.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/3_geophys_netcdf_line_utils_demo.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/NCSS_Demo.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/9b_line_dataset_plot_line_elevations.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/9a_line_dataset_plot.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/netcdf_grid_utils_shape_test.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/line_data_demo.py",
      "@type": "File"
    },
    {
      "@id": "examples/fetch_points_demo.ipynb",
      "@type": "File"
    },
    {
      "@id": "examples/dynamic_point_gridding_utils.py",
      "@type": "File"
    },
    {
      "@id": "pyproject.toml",
      "@type": "File",
      "description": "geophys_utils package specification"
    },
    {
      "@id": "environment.yml",
      "@type": "File",
      "description": "Conda environment specification"
    },
    {
      "@id": "resources.yml",
      "@type": "File",
      "description": "Minimum compute resource requirement specification"
    },
    {
      "@id": "CITATION.cff",
      "@type": "File",
      "description": "Citation details"
    },
    {
      "@id": "Dockerfile",
      "@type": "File",
      "description": "A Dockerfile used only for Binder deployment using a base image created using repo2docker in BinderHub to speed up the build process"
    },
    {
      "@id": "setup.py",
      "@type": "File"
    },
    {
      "@id": "bin/nc2aseg",
      "@type": "File"
    },
    {
      "@id": "bin/csw_find.bat",
      "@type": "File"
    },
    {
      "@id": "bin/csw_find",
      "@type": "File"
    },
    {
      "@id": "bin/rechunk.bat",
      "@type": "File"
    },
    {
      "@id": "bin/aseg2nc.bat",
      "@type": "File"
    },
    {
      "@id": "bin/aseg2nc",
      "@type": "File"
    },
    {
      "@id": "bin/rechunk",
      "@type": "File"
    },
    {
      "@id": "bin/nc2aseg.bat",
      "@type": "File"
    },
    {
      "@id": "build_all_images.sh",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/nc2aseg.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/csw_find.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_netcdf_line_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_data_stats.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_array_pieces.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_vincenty.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_get_netcdf_util.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_dem_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_concave_hull.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_array2file.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_netcdf_grid_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/rechunk.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_datetime_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_crs_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/dataset_metadata_cache/data/dataset_metadata_cache.sqlite",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/dataset_metadata_cache/_dataset_metadata_cache.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/dataset_metadata_cache/_sqlite_dataset_metadata_cache.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/dataset_metadata_cache/_postgres_dataset_metadata_cache.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/dataset_metadata_cache/dataset_metadata_cache_settings.yml",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/dataset_metadata_cache/csw2dataset_metadata_cache.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/dataset_metadata_cache/sqlite_dataset_metadata_cache_ddl.sql",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/dataset_metadata_cache/netcdf2dataset_metadata_cache.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/dataset_metadata_cache/__init__.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/dataset_metadata_cache/postgres_dataset_metadata_cache_ddl.sql",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/dataset_metadata_cache/dataset_search_demo.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_csw_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_netcdf_point_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/test/__main__.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/test/test_array_pieces.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/test/test_grid.nc",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/test/test_crs_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/test/test_data_stats.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/test/test_netcdf_grid_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/test/test_netcdf_point_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/test/test_netcdf_line_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/test/__init__.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_polygon_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_blrb.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/csw_utils_settings.yml",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/netcdf_converter/grav2netcdf_converter_settings_ga_metadata",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/netcdf_converter/test_netcdf_converter.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/netcdf_converter/_to_netcdf_converter.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/netcdf_converter/csv2netcdf_converter.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/netcdf_converter/grav2netcdf_converter_settings.yml",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/netcdf_converter/grav2netcdf_converter.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/netcdf_converter/aseg_gdf_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/netcdf_converter/aseg_gdf_settings.yml",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/netcdf_converter/grav2netcdf_converter_sql_strings.yml",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/netcdf_converter/aseg_gdf2netcdf_converter.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/netcdf_converter/__init__.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/netcdf_converter/netcdf2aseg_gdf_converter.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_transect_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_netcdf_utils.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/__init__.py",
      "@type": "File"
    },
    {
      "@id": "geophys_utils/_gdal_grid_utils.py",
      "@type": "File"
    },
    {
      "@id": "requirements.txt",
      "@type": "File",
      "description": "geophys_utils package dependency specification"
    },
    {
      "@id": "https://orcid.org/0000-0001-8937-8904",
      "@type": "Person",
      "name": "Alex Ip"
    },
    {
      "@id": "https://ror.org/04ge02x20",
      "@type": "Organization",
      "name": "Geoscience Australia",
      "description": "https://www.ga.gov.au/"
    },
    {
      "@id": "https://www.python.org/",
      "@type": "ComputerLanguage",
      "name": "Python3"
    },
    {
      "@id": "ro-crate-metadata.json",
      "@type": "CreativeWork",
      "identifier": "ro-crate-metadata.json",
      "about": {
        "@id": "./"
      }
    },
    {
      "@id": "build/scripts-2.7/nc2aseg",
      "@type": "File"
    },
    {
      "@id": "build/scripts-2.7/csw_find",
      "@type": "File"
    },
    {
      "@id": "build/scripts-2.7/aseg2nc",
      "@type": "File"
    },
    {
      "@id": "build/scripts-2.7/rechunk",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/nc2aseg.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/csw_find.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_netcdf_line_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_data_stats.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_array_pieces.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_vincenty.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_get_netcdf_util.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_dem_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_concave_hull.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_array2file.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_netcdf_grid_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/rechunk.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_datetime_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_crs_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/dataset_metadata_cache/data/dataset_metadata_cache.sqlite",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/dataset_metadata_cache/_dataset_metadata_cache.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/dataset_metadata_cache/_sqlite_dataset_metadata_cache.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/dataset_metadata_cache/_postgres_dataset_metadata_cache.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/dataset_metadata_cache/dataset_metadata_cache_settings.yml",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/dataset_metadata_cache/csw2dataset_metadata_cache.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/dataset_metadata_cache/netcdf2dataset_metadata_cache.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/dataset_metadata_cache/__init__.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/dataset_metadata_cache/dataset_search_demo.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_csw_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_netcdf_point_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/test/__main__.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/test/test_array_pieces.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/test/test_crs_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/test/test_data_stats.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/test/test_netcdf_grid_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/test/test_netcdf_point_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/test/test_netcdf_line_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/test/__init__.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_polygon_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_blrb.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/csw_utils_settings.yml",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/netcdf_converter/test_netcdf_converter.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/netcdf_converter/_to_netcdf_converter.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/netcdf_converter/csv2netcdf_converter.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/netcdf_converter/grav2netcdf_converter.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/netcdf_converter/aseg_gdf_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/netcdf_converter/aseg_gdf_settings.yml",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/netcdf_converter/aseg_gdf2netcdf_converter.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/netcdf_converter/__init__.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/netcdf_converter/netcdf2aseg_gdf_converter.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_transect_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_netcdf_utils.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/__init__.py",
      "@type": "File"
    },
    {
      "@id": "build/lib.linux-x86_64-2.7/geophys_utils/_gdal_grid_utils.py",
      "@type": "File"
    }
  ]
}
```


## Requirements - TO BE EDITED!!!!

This profile inherits the requirements of [source-code](https://w3id.org/workflowhub/workflow-ro-crate/). In particular, the entity acting as the `instrument` of the `CreateAction` MUST be the *main workflow*. This and other additional specifications are listed below.

<table>

  <tr>
   <td><strong>Property</strong></td>
   <td><strong>Required?</strong></td>
   <td><strong>Description</strong></td>
  </tr>

  <tr>
   <th colspan="3"><strong>Dataset</strong> (the <a href="https://www.researchobject.org/ro-crate/1.1/root-data-entity.html">root data entity</a>, e.g. <code>"@id": "./"</code>)</th>
  </tr>
  <tr>
   <td>conformsTo</td>
   <td>MUST</td>
   <td>Array MUST reference a <code>CreativeWork</code> entity with an <code>@id</code> URI that is consistent with the versioned <em>Permalink</em> of this document, and SHOULD also reference versioned permalinks for <a href="https://w3id.org/ro/wfrun/process/0.1">Process Run Crate</a> and <a href="https://w3id.org/workflowhub/workflow-ro-crate/1.0">Workflow RO-Crate</a>.</td>
  </tr>

  <tr>
   <th colspan="3"><strong>CreateAction</strong></th>
  </tr>

  <tr>
   <td>instrument</td>
   <td>MUST</td>
   <td>Identifier of the <em>main workflow</em>, as specified in <a href="https://w3id.org/ro/profiles/software/source-code/0.1">source-code</a>.</td>
  </tr>

  <tr>
   <th colspan="3"><strong>FormalParameter</strong></th>
  </tr>

  <tr>
   <td>workExample</td>
   <td>MAY</td>
   <td>Identifier of the data entity or <code>PropertyValue</code> instance that realizes this parameter. The data entity or <code>PropertyValue</code> instance SHOULD refer to this parameter via <a href="http://schema.org/exampleOfWork">exampleOfWork</a>.</td>
  </tr>

  <tr>
   <td>additionalType</td>
   <td>MUST</td>
   <td>SHOULD include: <code>File</code>, <code>Dataset</code> or <code>Collection</code> if it maps to a file, directory or <a href="process_run_crate#representing-multi-file-objects">multi-file dataset</a>, respectively; <code>PropertyValue</code> if it maps to a dictionary-like structured value (e.g. a CWL <em>record</em>); <a href="http://schema.org/DataType">DataType</a> or one of its subtypes (e.g. <a href="http://schema.org/Integer">Integer</a>) if it maps to a non-structured value. A more specific type MAY be used instead of <code>File</code> when appropriate (see <a href="http://schema.org/MediaObject#subtypes">MediaObject subtypes</a>), e.g. <a href="http://schema.org/ImageObject">ImageObject</a>. Note that multiple types can apply, e.g. <code>["File", "http://edamontology.org/data_3671"]</code>.</td>
  </tr>

</table>