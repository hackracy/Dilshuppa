var c1 = document.getElementById("chart-1-skills");
var c2 = document.getElementById("chart-2-skills");
var c3 = document.getElementById("chart-3-skills");
var c4 = document.getElementById("chart-4-skills");
var c5 = document.getElementById("chart-5-skills");
var c6 = document.getElementById("chart-6-skills");
var c7 = document.getElementById("chart-7-skills");
var c8 = document.getElementById("chart-8-skills");
var c9 = document.getElementById("chart-9-skills");
var c10 = document.getElementById("chart-10-skills");
var c11 = document.getElementById("chart-11-skills");

Chart.defaults.global.animation.duration = 2000;
Chart.defaults.global.animation.easing = 'easeOutExpo';
Chart.defaults.global.legend.display = false;
Chart.defaults.global.startAngle = 36;
Chart.defaults.global.tooltips.backgroundColor = 'rgba(204, 204, 204, 0.9)';
Chart.defaults.global.tooltips.titleFontColor = 'rgba(59, 59, 59, 1)';
Chart.defaults.global.tooltips.titleFontFamily = "'Lato', sans-serif";
Chart.defaults.global.tooltips.titleFontSize = 16;
Chart.defaults.global.tooltips.titleSpacing = 1;
Chart.defaults.global.tooltips.titleMarginBottom = 10;
Chart.defaults.global.tooltips.bodyFontColor = 'rgba(59, 59, 59, 1)';
Chart.defaults.global.tooltips.bodyFontFamily = "'Lato', sans-serif";
Chart.defaults.global.tooltips.bodyFontSize = 14;
Chart.defaults.global.tooltips.bodySpacing = 1;
Chart.defaults.global.tooltips.xPadding = 10;
Chart.defaults.global.tooltips.yPadding = 10;
Chart.defaults.global.tooltips.cornerRadius = 3;
Chart.defaults.global.tooltips.enabled = true;
Chart.defaults.global.tooltips.mode = 'point';
Chart.defaults.global.tooltips.position = 'nearest';
Chart.defaults.radar.scale.gridLines = false;

var myChart1 = new Chart(c1, {
    type: 'radar',
    data: {
      labels: [["Metasploit","Framework"], ["Exploit","Development"],"Recon","John the Ripper","Hydra", ["Vulnerability","Assessment"], "Post Exploitation", ["Social","Engineering"]],
      datasets: [
          {
          
            lineTension: 0.1,
            backgroundColor: "rgba(102, 153, 204, 0.2)",
            borderColor: "rgba(102, 153, 204, 1)",
            pointBackgroundColor: "rgba(102, 153, 204, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(102, 153, 204, 1)",
            data: [4,3,2,4,3,3,4,4]
          },
          
      ]
    },
      options: {
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(21, 243, 148, 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 3,
            min: 0,
            max: 3,
            display: false
          }
        }
      }
});



var my2 = new Chart(c2, {
    type: 'radar',
    data: {
      labels: ["Burp Suite", "OWASP ZAP", "Nikto","Wfuzz", "SqlMap", "Acunetix","Qualys", "Nessus", "nuclei", "gobuster", "waybackurls", "Arjun"],
      datasets: [
          {
            label: "Bug Bounty",
            lineTension: 0.1,
            backgroundColor: "rgba(102, 153, 204, 0.2)",
            borderColor: "rgba(102, 153, 204, 1)",
            pointBackgroundColor: "rgba(102, 153, 204, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(102, 153, 204, 1)",
            data: [4, 0, 2, 2, 3,2,2,3,3,3,3,3]
          },
          {
            label: "VAPT",
            lineTension: 0.1,
            backgroundColor: "rgba(250, 30, 4, 0.2)",
            borderColor: "rgba(203, 40, 21, 1)",
            pointBackgroundColor: "rgba(231, 53, 33, 1)",
            pointBorderColor: "#11EF3C",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#04FA33",
            pointHoverBorderColor: "rgba(250, 30, 4, 1)",
            data: [4, 2, 3, 3, 3,2,2,3,2,2,1,1]
          }
      ]
    },
    options: {
        startAngle: 36,
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(10, 247, 56, 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 3,
            min: 0,
            max: 3,
            display: false
          }
        }
    }
});

var myChart3 = new Chart(c3, {
    type: 'radar',
    data: {
      labels: [["Wireshark"],["Nmap"], ["IPS & IDS"], ["Network routers & ","firewalls"], ["TCPdump"], "OpenVAS", "Ettercap", "snort"],
      datasets: [
          {
            label: "Pentesting",
            lineTension: 0.1,
            backgroundColor: "rgba(102, 153, 204, 0.2)",
            borderColor: "rgba(102, 153, 204, 1)",
            pointBackgroundColor: "rgba(102, 153, 204, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(102, 153, 204, 1)",
            data: [3, 3, 2, 2, 1.5,3,2,1]
          },
          
      ]
    },
    options: {
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(6, 186, 248, 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 3,
            min: 0,
            max: 3,
            display: false
          }
        }
    }
});

var myChart4 = new Chart(c4, {
    type: 'radar',
    data: {
      labels: [ "Python", "c/c++", ["Html","CSS"],["JavaScript"],"Powershell"],
      datasets: [
          {
            label: "Language",
            lineTension: 0.1,
            backgroundColor: "rgba(232, 103, 209, 0.2)",
            borderColor: "rgba(235, 24, 197, 1)",
            pointBackgroundColor: "rgba(252, 1, 207, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#01C7FC",
            pointHoverBorderColor: "rgba(204, 204, 204, 1)",
            data: [1.5, 2, 2.5, 1,1 ]
          }
      ]
    },
    options: {
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(34, 232, 85 , 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 3,
            min: 0,
            max: 3,
            display: false
          }
        }
    }
});

var myChart5 = new Chart(c5, {
    type: 'radar',
    data: {
      labels: [["Static","Analysis"], ["Jadx"],"Frida", ["Dynamic","Analysis"], "MobSF","Ghidra",["Reverse","Engineering"]],
      datasets: [
          {
            label: "OS",
            lineTension: 0.1,
            backgroundColor: "rgba(204, 204, 204, 0.2)",
            borderColor: "rgba(204, 204, 204, 1)",
            pointBackgroundColor: "rgba(204, 204, 204, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(204, 204, 204, 1)",
            data: [3, 3, 2, 2,3, 3,2]
          }
      ]
    },
    options: {
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(50, 216, 245, 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 3,
            min: 0,
            max: 3,
            display: false
          }
        }
    }
});

var myChart6 = new Chart(c6, {
    type: 'radar',
    data: {
      labels: [["Burp","Suite"], ["MobSF"],"Frida", ["Android Debug","Bridge"],"SAST & DASt"],
      datasets: [
          {
            label: "OS",
            lineTension: 0.1,
            backgroundColor: "rgba(204, 204, 204, 0.2)",
            borderColor: "rgba(204, 204, 204, 1)",
            pointBackgroundColor: "rgba(204, 204, 204, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(204, 204, 204, 1)",
            data: [3, 3, 2, 2, 3]
          }
      ]
    },
    options: {
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(74, 250, 157, 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 3,
            min: 0,
            max: 3,
            display: false
          }
        }
    }
});

var myChart7 = new Chart(c7, {
    type: 'radar',
    data: {
      labels: ["Nmap", ["Aircrack-ng"], ["Fluxion"],["Kismet"], ["Wireshark"],"wifiphish","NodMCU", "Wifi Pinapple"],
      datasets: [
          {
            label: "Testing",
            lineTension: 0.1,
            backgroundColor: "rgba(1, 254, 13 , 0.2)",
            borderColor: "rgba(1, 254, 13, 1)",
            pointBackgroundColor: "rgba(254, 1, 1  , 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(242, 119, 122, 1)",
            data: [3, 3.5, 2, 2, 2,2,3,2]
          }
      ]
    },
    options: {
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(252, 1, 20, 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 3,
            min: 0,
            max: 3,
            display: false
          }
        }
    }
});

var myChart8 = new Chart(c8, {
    type: 'radar',
    data: {
      labels: ["Windows", "MacOS", "Kali_Linux", "ParrotOS", "Ubuntu", "Tails", "BalckArchLinux"],
      datasets: [
          {
            label: "FE Dev",
            lineTension: 0.1,
            backgroundColor: "rgba(25, 248, 184, 0.2)",
            borderColor: "rgba(25, 248, 184, 1)",
            pointBackgroundColor: "rgba(242, 119, 122, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(25, 248, 241 , 1)",
            data: [2, 3.5, 3, 2, 1.5, 1.5, 1]
          }
      ]
    },
    options: {
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(5, 246, 239, 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 3,
            min: 0,
            max: 3,
            display: false
          }
        }
    }
});


var myChart9 = new Chart(c9, {
    type: 'radar',
    data: {
      labels: ["English", "Urdu", "Arabic", "Hindi", "Malayalam"],
      datasets: [
          {
            label: "Backend Dev",
            lineTension: 0.1,
            backgroundColor: "rgba(148, 223, 219 , 0.2)",
            borderColor: "rgba(21, 234, 224 , 1)",
            pointBackgroundColor: "rgba(4, 250, 239 , 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#06F4F7",
            pointHoverBorderColor: "rgba(242, 119, 122, 1)",
            data: [3, 2, 1, 1.5, 3.5]
          }
      ]
    },
    options: {
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(245, 170, 40, 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 3,
            min: 0,
            max: 3,
            display: false
          }
        }
    }
});

var myChart10 = new Chart(c10, {
    type: 'radar',
    data: {
      labels: [["Microsoft", "Word"], ["Microsoft", "Excel"], ["Microsoft", "PowerPoint"], ["Adobe", "Photoshop"], ["Microsoft", "Teams"],"Zoom", ["Google", "Workspace"]],
      datasets: [
          {
            label: "Dev",
            lineTension: 0.1,
            backgroundColor: "rgba(9, 191, 240, 0.2)",
            borderColor: "rgba(9, 191, 240, 1)",
            pointBackgroundColor: "rgba(242, 119, 122, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(242, 119, 122, 1)",
            data: [3, 2.5,3, 1,2,2,3]
          }
      ]
    },
    options: {
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(142, 240, 9, 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 3,
            min: 0,
            max: 3,
            display: false
          }
        }
    }
});


var myChart11 = new Chart(c11, {
    type: 'radar',
    data: {
      labels: [["Strong Critical", "Thinking"], ["Continuous", "Learning"], ["Creative","Problem-Solving"], ["Teamwork"], ["Adaptability"], ["Time", "Management"]],
      datasets: [
          {
            label: "Dev",
            lineTension: 0.1,
            backgroundColor: "rgba(190, 62, 250, 0.2)",
            borderColor: "rgba(190, 62, 250, 1)",
            pointBackgroundColor: "rgba(173, 0, 253, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#AD00FD",
            pointHoverBorderColor: "rgba(242, 119, 122, 1)",
            data: [3, 2, 3, 3, 2, 3.5]
          }
      ]
    },
    options: {
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(103, 189, 249 , 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 3,
            min: 0,
            max: 3,
            display: false
          }
        }
    }
});




