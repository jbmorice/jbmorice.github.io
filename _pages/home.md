---
title     : "Jean-Baptiste Morice's Portfolio"
layout    : resume
permalink : /

# Top banner configuration
banner:
  background_default_color  : "#000"
  background_image_url      : "/assets/images/resume/sponza.png"
  background_image_filter   : "0.3"
  id_picture_url            : /assets/images/resume/id_picture.jpg
  hook_text                 : "Hi, I'm **Jean-Baptiste Morice** !"
  welcome_text              : |
    Welcome to my portfolio website.
  button_label              : "Learn more about me"
  button_url                : "#summary"

# Summary block configuration
summary :
#  title_text: "Intro"
  text : |
    Hello, my name is Jean-Baptiste Morice and I have recently graduated from [ESIR (École Supérieure d’Ingénieurs de Rennes)](https://esir.univ-rennes1.fr/en) as a **software engineer** specialized in **computer graphics** and **digital image processing**.

    My main interests are **computer graphics**, with an emphasis on **rendering** (real-time and non real-time), as well as **virtual reality** and **augmented reality**.

    I am currently looking for a job as a software engineer on a project involving any of my main interests.

    [Download my resume](/resume){: .btn .btn--primary .btn--large}

# Work experiences
experiences :
-   company_name        : B<>COM
    company_location    : Cesson-Sévigné, France
    company_website_url : https://b-com.com/en
    company_logo_url    : /assets/images/resume/company_logo_bcom.png
    position            : Virtual Reality R&D Engineer Intern
    start_date          : March
    end_date            : September 2018
    short_summary       : |
        Studied the possible interactions in virtual reality between synthetic 3D content (produced by a graphic designer) and 3D content captured from reality (photogrammetry, 360-degree photos and videos, etc.), developed demonstrators highlighting the identified technological barriers which could be the subject of new research projects for the R&D laboratory.
    detailed_summary    :
    timeline_icon_url   : /assets/images/resume/virtual-reality.png

-   company_name        : SOGITEC
    company_location    : Bruz, France
    company_website_url : http://www.sogitec.com
    company_logo_url    : /assets/images/resume/company_logo_sogitec.png
    position            : 3D Rendering Engineer Intern
    start_date          : June
    end_date            : September 2017
    short_summary       : |
        Assessed the relevance of the Vulkan graphics API as a replacement for OpenGL in a real-time 3D rendering engine. Implemented it on a subset of the engine, evaluated the potential performance gains, and proposed a methodology to perform the API change over the entire engine.
    detailed_summary    :
    timeline_icon_url   : /assets/images/resume/timeline_icon_fighter_jet.png

-   company_name        : FIT-SA
    company_location    : Rennes, France
    company_website_url : http://www.fitsa-group.com
    company_logo_url    : "/assets/images/resume/company_logo_fit.png"
    position            : IT Project Manager Intern
    start_date          : June
    end_date            : August 2016
    short_summary       : |
        Contributed to initiate and plan an improvement project for the company’s information system. Performed needs assessments and expressed functional specifications for the improvement of the current Enterprise Resource Planning software (ERP) and for the purchase of a Customer Relationship Management software (CRM).
    detailed_summary    :
    timeline_icon_url   : /assets/images/resume/timeline_icon_milk_bottle.png

-   company_name        : MPO France
    company_location    : Vilaines-La-Juhel, France
    company_website_url : https://www.mpo-international.com
    company_logo_url    : /assets/images/resume/company_logo_mpo.png
    position            : Software Developer Intern
    start_date          : April
    end_date            : August 2015
    short_summary       : |
        Functional analysis, design, and development of a software interface between a Desktop Publishing (DTP) workflow engine and a Manufacturing Execution System (MES).
    detailed_summary    :
    timeline_icon_url   : /assets/images/resume/timeline_icon_vinyl_record.png

# Degrees
degrees :
-   degree             : Engineering Degree in Computer Science
    school_name        : École Supérieure d'Ingénieurs de Rennes (ESIR)
    school_website_url : https://esir.univ-rennes1.fr
    school_logo_url    : /assets/images/resume/school_logo_esir.png
    school_location    : Rennes, France
    start_date         : 2015
    end_date           : 2018
    summary            : |
        A french engineering degree in computer science with a specialization in computer graphics and digital image processing from a competitive engineering school attached to the University of Rennes 1.
        

        **Courses :** rendering (real-time rendering, ray tracing, global illumination...), digital image processing, compilation for digital imaging, human-computer interactions, image classification, video compression, computer vision, special effects, video games

-   degree             : Two-Year University Degree in Computer Science
    school_name        : Institut Universitaire de Technologie de Laval
    school_website_url : http://www.iut-laval.univ-lemans.fr
    school_logo_url    : /assets/images/resume/school_logo_iut_laval.png
    school_location    : Laval, France
    start_date         : 2013
    end_date           : 2015
    summary            : |
        A two-year university degree in computer science. Approximately equivalent to a Diploma of Higher Education in the UK, or an Associate's Degree in the US.
        
        
        **Courses :** algorithms, data structures and programming, object-oriented programming, software architecture, human-computer interactions, databases, operating systems, computer networks

# Skills
# http://www.perbang.dk/rgbgradient/
skill_categories :
-   name             : Programming
    background_color : "#4B4B4C"
    text_color       :
    skills           :
    -   name  : C
        icon  : devicon-c-plain
    -   name  : C++
        icon  : devicon-cplusplus-plain
    -   name  : C#
        icon  : devicon-csharp-plain
    -   name  : Java
        icon  : devicon-java-plain
    -   name  : Python
        icon  : devicon-python-plain
    -   name  : PHP
        icon  : devicon-php-plain
    -   name  : HTML & CSS
        icon  : devicon-html5-plain

-   name             : Graphics Programming
    background_color : "#5E5E5F"
    text_color       :
    skills           :
    -   name  : Unity
        icon  : devicons devicons-unity_small
    -   name  : OpenGL & GLSL
        image : /assets/images/resume/opengl_logo.png
    -   name  : Vulkan
        image : /assets/images/resume/vulkan_logo.png

-   name             : Other
    background_color : "#717172"
    text_color       :
    skills           :
    -   name  : Git
        icon  : devicon-git-plain
    -   name  : Microsoft Visual Studio
        icon  : devicon-visualstudio-plain
    -   name  : Qt
        image : /assets/images/resume/qt_logo.png 
    -   name  : OpenCV
        image : /assets/images/resume/opencv_logo.png
    -   name  : MySQL
        icon  : devicon-mysql-plain
    -   name  : PostgreSQL
        icon  : devicon-postgresql-plain
    -   name  : Microsoft SQL Server
        icon  : devicons devicons-msql_server
    -   name  : Windows
        icon  : devicon-windows8-original
    -   name  : Linux
        icon  : devicon-linux-plain

-   name             : Personal
    background_color : "#848485"
    text_color       :
    skills           :
    -   name  : Teamwork
    -   name  : Communication
    -   name  : Project Management
    -   name  : Agile Software Development

-   name             : Languages
    background_color : "#989898"
    text_color       :
    skills           :
    -   name  : ":fr: French"
    -   name  : ":gb: English"

contact :
  catchphrase        : "Do not hesitate to contact me !"
  mail_catchphrase   : "Send me an email at : "
  social_enabled     : true
  #social_catchphrase :

attributions :
-   "Banner image from [Crytek Sponza scene rendered in Babylon.js](https://www.babylonjs.com/demos/sponza/)"
-   "VR HMD timeline icon made by [Freepik](http://www.freepik.com) from [Flaticon](www.flaticon.com) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)"
-   "Plane timeline icon made by [Dave Gandy](https://www.flaticon.com/authors/dave-gandy) from [Flaticon](www.flaticon.com) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)"
-   "Milk bottle timeline icon made by [Freepik](http://www.freepik.com) from [Flaticon](www.flaticon.com) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)"
-   "Vynil record timeline icon made by [Freepik](http://www.freepik.com) from [Flaticon](www.flaticon.com) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)"

# TODO: Maybe add these ?
# # Associations
# -   organization:
#     position:
#     startDate:
#     endDate:
#     summary:
---